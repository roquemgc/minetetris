"use strict";

function startGame(largura,altura){
	try {
		var tabuleiro = getMatrizVaziaTabuleiro(largura,altura);
		gerarTabuleiro(largura,altura);
		var peca = new Peca(5);
		printarPeca(peca);
	} catch(e){
		console.log(e);
	}
}

function getMatrizVaziaTabuleiro(largura,altura){
	var tabuleiro = new Array(altura);
	for(var i=0; i<altura; i++){
		tabuleiro[i] = new Array(largura);
		for(var j=0; j<largura; j++){
			tabuleiro[i][j] = 0;
		}
	}
	return tabuleiro;
}