"use strict";

var soundFundo = new Audio();
var intervalTemporizador;
var tempoPartida = { "minutos": 0, "segundos": 0 };
var delayQueda = 1000;
var isRightSpin = true;
var inverterTeclas = false;
var tabuleiroInvertido = false;

function startGame(largura, altura) {
	try {
		playSoundFundo();
		inverterTeclas = document.querySelector('#toggleInput').checked;
		var tabuleiro = getMatrizVaziaTabuleiro(largura, altura);
		var peca = gerarPecaAleatoria(tabuleiro);
		addPecaNaMatrizTabuleiro(tabuleiro, peca);
		printarTabuleiro(tabuleiro);
		document.onkeydown = function () { checarTecla(tabuleiro, peca); };
		temporizador();
		rodada(tabuleiro, peca);
	} catch (error) {
		console.log(error);
	}
}

function rodada(tabuleiro, peca) {
	var quedaPeca = setInterval(() => {
		acelerarPeca(tabuleiro, peca);
		if (pecaColidiu(peca)) {
			playSoundColisao();
			clearInterval(quedaPeca);
			const [linhas, temPecaEspecial] = limparLinhas(tabuleiro);
			if (linhas) {
				aumentarPontuacao(linhas);
				if (temPecaEspecial) {
					actionSpinningGame();
				}
			}

			peca = gerarPecaAleatoria(tabuleiro);
			addPecaNaMatrizTabuleiro(tabuleiro, peca);
			printarTabuleiro(tabuleiro);

			if (isGameOver(tabuleiro)) {
				return;
			}

			document.onkeydown = function () { checarTecla(tabuleiro, peca); };
			rodada(tabuleiro, peca);
		}
	}, delayQueda);
}

function temporizador() {
	const segundo = 1000;
	const minuto = segundo * 60;
	const hora = minuto * 60;
	const inicio = Date.now();

	intervalTemporizador = setInterval(function () {
		const agora = Date.now() - inicio;
		tempoPartida["minutos"] = Math.floor((agora % hora) / minuto);
		tempoPartida["segundos"] = Math.floor((agora % minuto) / segundo);
		document.getElementById("tempo-partida").innerHTML = tempoPartida["minutos"] + "m : " + tempoPartida["segundos"] + "s";
	}, 1000);
}

function checarTecla(tabuleiro, peca) {
	var cima = '38';
	var baixo = '40';
	var esquerda = '37';
	var direita = '39';

	if (inverterTeclas && tabuleiroInvertido) {
		cima = '40';
		baixo = '38';
		esquerda = '39';
		direita = '37';
	}

	var e = e || window.event;

	if (e.keyCode == cima) {
		// Cima
		e.preventDefault();

		girarPeca(tabuleiro, peca);

	} else if (e.keyCode == baixo) {
		// Baixo
		e.preventDefault();

		acelerarPeca(tabuleiro, peca);

	} else if (e.keyCode == esquerda) {
		// Esquerda
		e.preventDefault();

		moverPecaPraEsquerda(tabuleiro, peca);

	} else if (e.keyCode == direita) {
		// Direita
		e.preventDefault();

		moverpecaPecaPraDireita(tabuleiro, peca);
	}
}

function aumentarPontuacao(linhasRemovidas) {
	const elemPontuacao = document.getElementById("pontuacao");
	const elemLinhasEliminadas = document.getElementById("linhas-eliminadas");
	var pontuacao = parseInt(elemPontuacao.innerText) + ((linhasRemovidas * 10) * linhasRemovidas);

	elemPontuacao.innerText = pontuacao;
	elemLinhasEliminadas.innerText = parseInt(elemLinhasEliminadas.innerText) + linhasRemovidas;

	aumentarDificuldade(pontuacao);
}

function aumentarDificuldade(pontuacao) {
	const elemDificuldade = document.getElementById("nivel-dificuldade");

	var dif = pontuacao / 300;
	delayQueda -= 50 * Math.trunc(dif);

	elemDificuldade.innerText = Math.trunc(dif) + 1;
}

function actionSpinningGame() {

	var animationSpinningGame = document.getElementById('rolling-tetris');

	if (isRightSpin) {

		animationSpinningGame.classList.remove('backToNormalRollingTetris');
		animationSpinningGame.classList.toggle('spinningRollingTetris');
		isRightSpin = !isRightSpin;
		tabuleiroInvertido = !tabuleiroInvertido;
		inverterTeclas = !inverterTeclas;

	} else {

		animationSpinningGame.classList.remove('spinningRollingTetris');
		animationSpinningGame.classList.toggle('backToNormalRollingTetris');
		isRightSpin = !isRightSpin;
		tabuleiroInvertido = !tabuleiroInvertido;
		inverterTeclas = !inverterTeclas;
	}
}

function isGameOver(tabuleiro) {
	var ret = false;
	var linhaFinal = getAlturaTabuleiro(tabuleiro) - 1;
	tabuleiro[linhaFinal].forEach(bloco => {
		if (bloco != 0) {
			ret = true;
		}
	});
	if (ret) {
		clearInterval(intervalTemporizador);
		stopSoundFundo();
		var text = "Game Over";
		text += "\nTempo de partida: " + tempoPartida["minutos"] + "m";
		text += " " + tempoPartida["segundos"] + "s";
		window.alert(text);
	}
	return ret;
}

function playSound(filename, loop, volume) {
	var audio = new Audio('../lib/sound/' + filename);
	audio.loop = loop;
	audio.volume = volume;
	audio.play();
	return audio;
}

function playSoundFundo() {
	soundFundo = playSound("fundo.mp3", true, 0.01);
}

function stopSoundFundo() {
	soundFundo.pause();
}

function playSoundColisao() {
	playSound("colisao.mp3", false, 0.5);
}

function playSoundLimparLinhas() {
	playSound("limparLinhas.mp3", false, 0.5);
}

function playSoundSpinning() {
	playSound("spinning.mp3", false, 0.5);
}