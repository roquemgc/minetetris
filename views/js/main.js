const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const canvasNext = document.getElementById('next');
const ctxNext = canvasNext.getContext('2d');

let accountValues = {
  time: '00:00',
  score: 0,
  lines: 0,
  level: 1,
  speed: 0
};

function updateAccount(key, value) {
  let element = document.getElementById(key);
  if(element) {
    element.textContent = value;
  }
}

let account = new Proxy(accountValues, {
  set: (target, key, value) => {
    target[key] = value;
    updateAccount(key, value);
    return true;
  }
});

let requestId = null;

let moves;
defineMoves();

function defineMoves() {
  moves = {
    [KEY.LEFT]: (p) => ({ ...p, x: p.x - 1 }),
    [KEY.UP]: (p) => board.rotate(p, ROTATION.RIGHT),
    [KEY.RIGHT]: (p) => ({ ...p, x: p.x + 1 }),
    [KEY.DOWN]: (p) => ({ ...p, y: p.y + 1 }),
    [KEY.SPACE]: (p) => ({ ...p, y: p.y + 1 }),
    [KEY.Q]: (p) => board.rotate(p, ROTATION.LEFT)
  };
}

function toggleMoves() {
  // Verifica se o campo está girado
  if(board.isSpinned) {
    moves[KEY.LEFT] = (p) => ({ ...p, x: p.x + 1 }),
    moves[KEY.UP] = (p) => ({ ...p, y: p.y + 1 }),
    moves[KEY.RIGHT] = (p) => ({ ...p, x: p.x - 1 }),
    moves[KEY.DOWN] = (p) => board.rotate(p, ROTATION.RIGHT)
  } else {
    defineMoves();
  }
}

initNext();

function initNext() {
  // Calcula o tamanho do canvas next
  ctxNext.canvas.width = 4 * BLOCK_SIZE;
  ctxNext.canvas.height = 4 * BLOCK_SIZE;
  ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);
}

function addEventListener() {
  document.removeEventListener('keydown', handleKeyPress);
  document.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
  if(event.keyCode === KEY.P) {
    pause();
  }
  if(event.keyCode === KEY.ESC) {
    gameOver();
  } else if(moves[event.keyCode]) {
    event.preventDefault();
    // Recebe o novo evento
    let p = moves[event.keyCode](board.piece);
    if(event.keyCode === KEY.SPACE) {
      // Hard drop
      if(document.querySelector('#pause-btn').style.display === 'block') {
        colisionSound.play();
      } else {
        return;
      }
      
      while (board.valid(p)) {
        board.piece.move(p);
        p = { ...board.piece, y: board.piece.y + 1 };
      }
      board.piece.hardDrop();
    } else if(board.valid(p)) {
      board.piece.move(p);
    }
  }
}

function resetGame() {
  account.score = 0;
  account.lines = 0;
  account.level = 1;
  board.reset();
  speed = { start: performance.now(), elapsed: 0, level: LEVEL[account.level] };
}

let board;

function play(size) {
  addEventListener();
  board = new Board(ctx, ctxNext, size);
  resetGame();
  // Cancela a animação caso ainda tenha um jogo
  if(requestId) {
    cancelAnimationFrame(requestId);
  }

  initTimer();
  animate();
  toggleBoard();
  toggleButtons();
  backgroundSound.play();
}

function animate(now = 0) {
  speed.elapsed = now - speed.start;
  if(speed.elapsed > speed.level) {
    speed.start = now;
    if(!board.drop()) {
      gameOver();
      return;
    }
  }
  // Limpa o tabuleiro
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  board.draw();
  requestId = requestAnimationFrame(animate);
}

function gameOver() {
  cancelAnimationFrame(requestId);

  let http = new XMLHttpRequest();
  let url = "/minetetris/controllers/jogoControllers/rt.php";
  let gameData = new FormData();
  gameData.append("tempo", account.time);
  gameData.append("dificuldade", account.level);
  gameData.append("pontuacao", account.score);
  gameData.append("linhas_eliminadas", account.lines);
  http.open("POST", url, true);
  http.send(gameData);

  let time = account.time.split(':');
  console.log(time);

  let text = "Game Over";
  text += "\nTempo de partida: " + time[0] + "m";
  text += " " + time[1] + "s";
  text += "\nDificuldade: " + account.level;
  text += "\nPontuação: " + account.score;
  text += "\nLinhas Eliminadas: " + account.lines;
  window.alert(text);

  // window.location.reload();
  
  sound.pause();
  finishSound.play();

  resetTimer();
  toggleBoard();
  toggleButtons();
}

function pause() {
  if(!requestId) {
    initTimer();
    toggleBoard();
    toggleButtons();
    animate();
    backgroundSound.play();

    return;
  }

  pauseTimer();
  toggleBoard();
  toggleButtons();

  cancelAnimationFrame(requestId);
  requestId = null;
}

let timerCall = null;

function timer() {
  const time = account.time.split(':');

  let seconds = time[1]++;
  let minutes = time[0];

  seconds++;

  if(seconds < 10) seconds = '0' + seconds;

  if(seconds > 59) {
    seconds = '00';
    minutes++;

    if(minutes < 10) minutes = '0' + minutes;
  }
  account.time = `${minutes}:${seconds}`;
}

function initTimer() {

  timerCall = setInterval(timer, 1000);
}

function pauseTimer() {
  clearInterval(timerCall);
}

function resetTimer() {
  clearInterval(timerCall);
  account.time = '00:00';   
}

function toggleButtons() {
  // Alterna o estado dos botões start e pause
  let startBtn = document.querySelector('#start-btn');
  startBtn.style.display = startBtn.style.display === 'none' ? 'block' : 'none';
  
  let pauseBtn = document.querySelector('#pause-btn');
  pauseBtn.style.display = pauseBtn.style.display === 'block' ? 'none' : 'block';
}

function toggleBoard() {
  // Alterna o estado do board background e do board
  let backImg = document.querySelector('#rolling-tetris img');
  backImg.style.opacity = backImg.style.opacity === '1' ? '0.4' : '1';

  let board = document.querySelector('#board');
  board.style.display = board.style.display === 'block' ? 'none' : 'block';
}

