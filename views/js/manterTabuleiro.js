"use strict";

function verificarLarguraAltura(largura,altura){
	var msg_erro = "Dimensão inválida de tabuleiro";
	if(largura!=10 || altura!=20){
		if(largura!=22 || altura!=44){
			throw msg_erro;
		}
	}
}

function gerarTabuleiro(largura,altura){
	try{
		verificarLarguraAltura(largura,altura);
		var div_tabuleiro = document.getElementById("gamerollingtetris");
		var tabuleiro = document.createElement("div");
		tabuleiro.id = "tabuleiro";
		tabuleiro.style.display = "grid";
		tabuleiro.style.gridTemplateColumns = "auto";
		var grid_columns = "";
		for(var j=0; j<largura; j++){
			grid_columns += j==0? "auto" : " auto";
		}
		var largura_celula = (div_tabuleiro.clientWidth / largura) - 2;
		var altura_celula = (div_tabuleiro.clientHeight / altura) - 2;
		for(var i=0; i<altura; i++){
			var linha = document.createElement("div");
			linha.id = "linha_" + i;
			linha.style.display = "grid";
			linha.style.gridTemplateColumns = grid_columns;
			linha.style.gridTemplateRows = altura_celula;
			for(var j=0; j<largura; j++){
				var celula = document.createElement("div");
				celula.id = "celula_" + i + "_" + j;
				celula.style.width = largura_celula + "px";
				celula.style.height = altura_celula + "px";
				celula.style.border = "1px solid black";
				linha.appendChild(celula);
			}
			tabuleiro.appendChild(linha);
		}
		div_tabuleiro.appendChild(tabuleiro);
		var peca = new Peca(3);
		gerarPeca(peca);
	}catch(e){
		console.log(e);
	}
}

function getCelula(linha,coluna){
	var celula_id = "celula_" + linha + "_" + coluna;
	var celula = document.getElementById(celula_id);
	return celula;
}

function getLinhaCelula(celula){
	var linha = (celula.id.split("_"))[1];
	return linha;
}

function getColunaCelula(celula){
	var coluna = (celula.id.split("_"))[2];
	return coluna;
}

function gerarPecaI(peca,celula_inicial){
	var linha_inicial = getLinhaCelula(celula_inicial);
	var coluna_inicial = getColunaCelula(celula_inicial);
	for(var i=linha_inicial; i<(linha_inicial+4); i++){
		var celula_atual = getCelula(i,j);
		celula_atual.style.backgroundColor = "black";
	}
}

function gerarPecaQuadrado2x2(peca,celula_inicial){
	var linha_inicial = getLinhaCelula(celula_inicial);
	var coluna_inicial = getColunaCelula(celula_inicial);
	for(var i=linha_inicial; i<(linha_inicial+2); i++){
		for(var j=coluna_inicial; j<(coluna_inicial+2); j++){
			var celula_atual = getCelula(i,j);
			celula_atual.style.backgroundColor = "black";
		}
	}
}

function gerarPecaL(peca,celula_inicial){
	var linha_inicial = getLinhaCelula(celula_inicial);
	var coluna_inicial = getColunaCelula(celula_inicial);
	var contador = 0;
	for(var i=linha_inicial; i<(linha_inicial+3); i++){
		var celula_atual = getCelula(i,coluna_inicial);
		celula_atual.style.backgroundColor = "black";
		if(contador == 2){
			var j=coluna_inicial;
			j++;
			var nova_celula_atual = getCelula(i,j);
			nova_celula_atual.style.backgroundColor = "black";
		}
		contador ++;
	}
}

function gerarPeca(peca){
	if(!(Peca.isPecaObj(peca))){
		throw "'peca' não é um objeto da classe Peca";
	}
	var celula_inicial = getCelula(0,0);
	if(peca.tipo==="i"){
		gerarPecaI(peca,celula_inicial);
	}else{
		if(peca.tipo==="quadrado 2x2"){
			gerarPecaQuadrado2x2(peca,celula_inicial);
		}else{
			if(peca.tipo==="L"){
				gerarPecaL(peca,celula_inicial);
			}
		}
	}
}