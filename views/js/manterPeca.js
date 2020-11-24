"use strict";

// Gera uma peça aleatória
function gerarPecaAleatoria(tabuleiro) {
	var tipo_aleatorio = Math.floor(Math.random() * 7) + 1;
	return new Peca(tabuleiro, tipo_aleatorio);
}

// Gira a peça em jogo no sentido horário
function girarPeca(tabuleiro, peca) {
	removePecaNaMatrizTabuleiro(tabuleiro, peca);
	peca.girar();
	addPecaNaMatrizTabuleiro(tabuleiro, peca, 1);
	printarTabuleiro(tabuleiro);
}

// Move a peça em jogo para esquerda
function moverPecaPraEsquerda(tabuleiro, peca) {
	removePecaNaMatrizTabuleiro(tabuleiro, peca);
	peca.moverEsquerda();
	addPecaNaMatrizTabuleiro(tabuleiro, peca, 1);
	printarTabuleiro(tabuleiro);
}

// Move a peça em jogo para a direita
function moverpecaPecaPraDireita(tabuleiro, peca) {
	removePecaNaMatrizTabuleiro(tabuleiro, peca);
	peca.moverDireita();
	addPecaNaMatrizTabuleiro(tabuleiro, peca, 1);
	printarTabuleiro(tabuleiro);
}

// Acelera a queda da peça em jogo
function acelerarPeca(quedaPeca, tabuleiro, peca) {
	removePecaNaMatrizTabuleiro(tabuleiro, peca);
	peca.moverBaixo();
	addPecaNaMatrizTabuleiro(tabuleiro, peca, 1);
	printarTabuleiro(tabuleiro);

	if(pecaColidiu(peca)) {
		playSoundColisao();
		clearInterval(quedaPeca);
		const [linhas, temPecaEspecial] = limparLinhas(tabuleiro);
		if (linhas) {
			playSoundLimparLinhas();
			aumentarPontuacao(linhas);
			if (temPecaEspecial) {
				actionSpinningGame();
			}
		}
		if (isGameOver(tabuleiro)) {
			return;
		}

		peca = gerarPecaAleatoria(tabuleiro);
		peca = new Peca(tabuleiro, 2)
		addPecaNaMatrizTabuleiro(tabuleiro, peca);
		printarTabuleiro(tabuleiro);

		document.onkeydown = function () { checarTecla(tabuleiro, peca); };
		rodada(tabuleiro, peca);
	}
}