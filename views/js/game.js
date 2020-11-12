"use strict";

function startGame(largura, altura){
	try {
		gerarTabuleiro(largura, altura);
		var peca = new Peca(5);
		printarPeca(peca);
	} catch(e){
		console.log(e);
	}
}

// Detectar as teclas do usuário
document.querySelector('body').addEventListener('keydown', function(event) {
	console.log('teste');
});

	verificarColisao();

function verificarColisao() {
	
	gerarPeca(peca);
}