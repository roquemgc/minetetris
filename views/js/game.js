"use strict";

function startGame(largura,altura){
	try {
		gerarTabuleiro(largura,altura);
		var peca = new Peca(5);
		printarPeca(peca);
	} catch(e){
		console.log(e);
	}
}