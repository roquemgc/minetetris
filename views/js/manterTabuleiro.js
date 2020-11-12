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

function gerarTabuleiro(largura, altura){
	var div_tabuleiro = document.getElementById("rolling-tetris");
	var tabuleiro = document.createElement("div");

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
	for(var i = 0; i < altura; i++){
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

function getLarguraTabuleiro(){
	var tabuleiro = getTabuleiro();
	var largura = parseInt((tabuleiro.classList[0].split("x"))[0]);
	return largura;
}

function getAlturaTabuleiro(){
	var tabuleiro = getTabuleiro();
	var altura = parseInt((tabuleiro.classList[0].split("x"))[1]);
	return altura;
}