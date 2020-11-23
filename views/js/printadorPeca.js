"use strict";

function setCelulaPecaBackground(celula, cor, borderColor) {
	celula.style.backgroundImage = cor;
	celula.style.border = "1px solid"+ borderColor;
}

function printarPeca(peca_matriz_tabuleiro, celula) {

	switch (peca_matriz_tabuleiro) {
		case 1:
			setCelulaPecaBackground(celula, "url('../lib/img/Bloco_normal_yellow.png')", "#cddc39");
			break;
		case 2:
			setCelulaPecaBackground(celula, "url('../lib/img/Bloco_normal_green.png')", "#4caf50");
			break;
		case 3:
			setCelulaPecaBackground(celula, "url('../lib/img/Bloco_normal_ciano.png')", "#03a9f4");
			break;
		case 4:
			setCelulaPecaBackground(celula, "url('../lib/img/Bloco_normal_black.png')", "#462646");
			break;
		case 5:
			setCelulaPecaBackground(celula, "url('../lib/img/Bloco_normal_blue.png')", "#044477");
			break;
		case 6:
			setCelulaPecaBackground(celula, "url('../lib/img/Bloco_normal_brown.png')", "#614338");
			break;
		case 7:
			setCelulaPecaBackground(celula, "url('../lib/img/Bloco_especial.gif')", "#000000");
			break;
		default:
			throw "ocorreu um erro, pois a peça não existe";
			
	}
}