"use strict";

function startGame(largura,altura){
	try {
		gerarTabuleiro(largura,altura);
		var peca = new Peca(5);
		gerarPeca(peca);
		
	} catch(e){
		console.log(e);
	}
}