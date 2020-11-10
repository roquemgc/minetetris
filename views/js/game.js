"use strict";

function startGame(){
	try{
		gerarTabuleiro(10,20);
		var peca = new Peca(7);
		gerarPeca(peca);
	}catch(e){
		console.log(e);
	}
}