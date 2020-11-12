"use strict";

function verificarLarguraAltura(largura,altura){
	var msg_erro = "Dimensão inválida de tabuleiro";
	if(largura!=10 || altura!=20){
		if(largura!=22 || altura!=44){
			throw msg_erro + "\nfunction 'verificarLarguraAltura()' - manterTabuleiro.js";
		}
	}
}

function getMatrizVaziaTabuleiro(largura,altura){
	verificarLarguraAltura(largura, altura);
	var tabuleiro = new Array(altura);
	for(var i=0; i<altura; i++){
		tabuleiro[i] = new Array(largura);
		for(var j=0; j<largura; j++){
			tabuleiro[i][j] = 0;
		}
	}
	return tabuleiro;
}

function posicaoTemPeca(matriz_tabuleiro,linha,coluna){
	return matriz_tabuleiro[linha][coluna] != 0;
}

function printarTabuleiro(matriz_tabuleiro){
	var altura = getAlturaTabuleiro(matriz_tabuleiro);
	var largura = getLarguraTabuleiro(matriz_tabuleiro);
	var div_tabuleiro = document.getElementById("rolling-tetris");
	var tabuleiro = document.getElementById('tabuleiro');
	if(tabuleiro != null){
		div_tabuleiro.removeChild(tabuleiro);	
	}
	tabuleiro = document.createElement("div");

	tabuleiro.id = "tabuleiro";
	tabuleiro.classList.add(largura + "x" + altura);
	tabuleiro.style.display = "grid";
	tabuleiro.style.gridTemplateColumns = "auto";
	
	var grid_columns = "";
	for(var j=0; j < largura; j++){
		grid_columns += j == 0 ? "auto" : " auto";
	}

	var largura_celula = (div_tabuleiro.clientWidth / largura);
	var altura_celula = (div_tabuleiro.clientHeight / altura);
	for(var i = (altura-1); i >= 0; i--){
		var linha = document.createElement("div");
		linha.id = "linha_" + i;
		linha.style.display = "grid";
		linha.style.gridTemplateColumns = grid_columns;
		linha.style.gridTemplateRows = altura_celula;
		for(var j = 0; j < largura; j++) {
			var celula = document.createElement("div");
			celula.id = "celula_" + i + "_" + j;
			celula.style.width = largura_celula + "px";
			celula.style.height = altura_celula + "px";
			celula.style.border = "1px solid black";
			if(posicaoTemPeca(matriz_tabuleiro,i,j)){
				setCelulaPecaBackground(celula);
			}
			linha.appendChild(celula);
		}
		tabuleiro.appendChild(linha);
	}
	// Esconde o botão inicial
	document.getElementById("comecar-game").style.display = "none";
	// Ajusta a opacidade do background do tabuleiro
	document.getElementById("rt-background").style.opacity = 1
	// Constrói o tabuleiro na tela
	div_tabuleiro.appendChild(tabuleiro);
}

function getCelula(linha,coluna){
	if(linha < 0 || linha >= getAlturaTabuleiro() || coluna < 0 || coluna >= getLarguraTabuleiro()){
		throw "Índices inválidos da célula\nfunction 'getCelula()' - manterTabuleiro.js";
	}
	var celula_id = "celula_" + linha + "_" + coluna;
	var celula = document.getElementById(celula_id);
	return celula;
}

function getLinhaCelula(celula){
	var linha = parseInt((celula.id.split("_"))[1]);
	return linha;
}

function getColunaCelula(celula){
	var coluna = parseInt((celula.id.split("_"))[2]);
	return coluna;
}

function getTabuleiro(){
	var tabuleiro = document.getElementById("tabuleiro");
	return tabuleiro;
}

function getLarguraTabuleiro(matriz_tabuleiro){
	return matriz_tabuleiro[0].length;
}

function getAlturaTabuleiro(matriz_tabuleiro){
	return matriz_tabuleiro.length;
}

function addPecaNaMatrizTabuleiro(matriz_tabuleiro,peca,tipo_presenca){
	if(!(Peca.isPecaObj(peca))){
		throw "'peca' não é um objeto da classe 'Peca'\nfunction 'addPecaNaMatrizTabuleiro' - manterTabuleiro.js";
	}
	if(tipo_presenca<1 || tipo_presenca>3){
		throw "'tipo_presenca' inválido\nfunction 'addPecaNaMatrizTabuleiro' - manterTabuleiro.js";
	}
	for(var i = 0; i < peca.coordenadas_preenchidas.length; i++){
		var coordenada = peca.coordenadas_preenchidas[i];
		matriz_tabuleiro[coordenada[0]][coordenada[1]] = tipo_presenca;
	}
}

function removePecaNaMatrizTabuleiro(matriz_tabuleiro,peca){
	if(!(Peca.isPecaObj(peca))){
		throw "'peca' não é um objeto da classe 'Peca'\nfunction 'removePecaNaMatrizTabuleiro' - manterTabuleiro.js";
	}
	for(var i = 0; i < peca.coordenadas_preenchidas.length; i++){
		var coordenada = peca.coordenadas_preenchidas[i];
		matriz_tabuleiro[coordenada[0]][coordenada[1]] = 0;
	}	
}