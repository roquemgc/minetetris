class Board {
  constructor(ctx, ctxNext, size) {
    this.ctx = ctx;
    this.ctxNext = ctxNext;
    this.cols = BOARD_DIMENSION[size].COLS;
    this.rows = BOARD_DIMENSION[size].ROWS;
    this.isSpinned = false;
    this.init();
  }

  init() {
    // Define o tamanho do canvas
    this.ctx.canvas.width = 10 * BLOCK_SIZE;
    this.ctx.canvas.height = 20 * BLOCK_SIZE;

    // Define a escala dos elementos inseridos no contexto do canvas
    if(this.rows === 44) {
      this.ctx.scale((BLOCK_SIZE / 100) * 45.5, (BLOCK_SIZE / 100)  * 45.5);
    } else {
      this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
    }
  }

  reset() {
    this.grid = this.getEmptyGrid();
    this.piece = new Piece(this.ctx);
    this.piece.setStartingPosition();
    this.getNewPiece();
  }

  getNewPiece() {
    const { width, height } = this.ctxNext.canvas;
    this.next = new Piece(this.ctxNext);
    this.ctxNext.clearRect(0, 0, width, height);
    this.next.draw();
  }

  draw() {
    this.piece.draw();
    this.drawBoard();
  }

  drop() {
    let p = { ...this.piece, y: this.piece.y + 1 };
    
    if(this.valid(p)) {
      this.piece.move(p);
    } else {
      if(!this.piece.hardDropped) {
        colisionSound.play();
      }
      this.freeze();
      this.clearLines();
      if(this.piece.y === 0) {
        // Game over
        return false;
      }
      this.piece = this.next;
      this.piece.ctx = this.ctx;
      this.piece.setStartingPosition();
      this.getNewPiece();
    }

    return true;
  }

  clearLines() {
    let lines = 0;

    this.grid.forEach((row, y) => {
      // Caso toda a linha maior que 0 temos uma linha cheia
      if(row.every((value) => value > 0)) {
        // Procura se há um bloco especial na linha
        if(row.indexOf(7) >= 0) {
          this.spin();
          // Verifica se o inverter teclas checkbox não foi selecionado
          if(!document.querySelector('#toggle-reverse-keys').checked) {
            toggleMoves();
          }
        }

        lines++;
        // Remove a linha
        this.grid.splice(y, 1);
        // Adiciona uma nova linha no topo
        this.grid.unshift(Array(this.cols).fill(0));
      }
    });

    if(lines > 0) {
      // Calcular pontuação
      account.score += this.getLinesClearedPoints(lines);
      account.lines += lines;

      let level = parseInt(account.score / POINTS_PER_LEVEL) + 1;
      // Aumentar nível   
      account.level = level;
      // Aumentar velocidade
      account.speed = LEVEL[account.level];
    }
  }

  valid(p) {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;
        return value === 0 || (this.isInsideWalls(x, y) && this.notOccupied(x, y));
      });
    });
  }

  freeze() {
    this.piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if(value > 0) {
          this.grid[y + this.piece.y][x + this.piece.x] = value;
        }
      });
    });
  }

  drawBoard() {
    this.grid.forEach((row, y) => {
      row.forEach((value, x) => {
        if(value > 0) {
          this.ctx.drawImage(BLOCK_IMG[value], x, y, 1, 1);
        }
      });
    });
  }

  getEmptyGrid() {
    return Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
  }

  isInsideWalls(x, y) {
    return x >= 0 && x < this.cols && y <= this.rows;
  }

  notOccupied(x, y) {
    return this.grid[y] && this.grid[y][x] === 0;
  }

  rotate(piece, direction) {
    let p = JSON.parse(JSON.stringify(piece));
    if(!piece.hardDropped) {
      // Transpõe a matriz peça
      for (let y = 0; y < p.shape.length; ++y) {
        for (let x = 0; x < y; ++x) {
          [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
        }
      }
      // Reverte a ordem das colunas
      if (direction === ROTATION.RIGHT) {
        p.shape.forEach((row) => row.reverse());
      } else if (direction === ROTATION.LEFT) {
        p.shape.reverse();
      }
    }

    return p;
  }

  spin() {
    let rt = document.querySelector('#rolling-tetris');

    if(this.isSpinned) {
      rt.classList.remove('rotate-board');
      rt.classList.toggle('reverse-rotate-board');
    } else {
      rt.classList.remove('reverse-rotate-board');
      rt.classList.toggle('rotate-board');
    }

    this.isSpinned = !this.isSpinned;
  }

  getLinesClearedPoints(lines) {
    const lineClearPoints =
      lines === 1
        ? POINTS.SINGLE
        : lines === 2
        ? POINTS.DOUBLE
        : lines === 3
        ? POINTS.TRIPLE
        : lines === 4
        && POINTS.TETRIS;

    clearLinesSound.play();

    return lineClearPoints;
  }
}
