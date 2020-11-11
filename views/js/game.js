"use strict";

function startGame(){
	try {
		var peca = new Peca(5);
		gerarPeca(peca);
		
	} catch(e){
		console.log(e);
	}
}