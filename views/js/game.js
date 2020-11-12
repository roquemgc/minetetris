"use strict";

function startGame(largura, altura){
	try {
<<<<<<< HEAD
		gerarTabuleiro(largura, altura);
=======
		var tabuleiro = getMatrizVaziaTabuleiro(largura,altura);
		gerarTabuleiro(largura,altura);
>>>>>>> 56b41651d25c875e38d36726a15d7fa5196d6a47
		var peca = new Peca(5);
		printarPeca(peca);
	} catch(e){
		console.log(e);
	}
}


while(true) {

	

	verificarColisao();
}

function verificarColisao() {
	
	gerarPeca(peca);
}