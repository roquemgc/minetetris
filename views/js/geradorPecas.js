"use strict";

function gerarPeca1(peca,celula_inicial){
	var linha_inicial = getLinhaCelula(celula_inicial);
	var coluna_inicial = getColunaCelula(celula_inicial);
	for(var i=linha_inicial; i<(linha_inicial+4); i++){
		var celula_atual = getCelula(i,j);
		celula_atual.style.backgroundColor = "black";
	}
}

function gerarPeca2(peca,celula_inicial){
	var linha_inicial = getLinhaCelula(celula_inicial);
	var coluna_inicial = getColunaCelula(celula_inicial);
	if(coluna_inicial == (getLarguraTabuleiro()-1)){
		coluna_inicial --;
	}
	for(var i=linha_inicial; i<(linha_inicial+2); i++){
		for(var j=coluna_inicial; j<(coluna_inicial+2); j++){
			var celula_atual = getCelula(i,j);
			celula_atual.style.backgroundColor = "black";
		}
	}
}

function gerarPeca3(peca,celula_inicial){
	var linha_inicial = getLinhaCelula(celula_inicial);
	var coluna_inicial = getColunaCelula(celula_inicial);
	if(coluna_inicial == (getLarguraTabuleiro()-1)){
		coluna_inicial --;
	}
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

function gerarPeca4(peca,celula_inicial){
	var linha_inicial = getLinhaCelula(celula_inicial);
	var coluna_inicial = getColunaCelula(celula_inicial);
	if(coluna_inicial==0){
		coluna_inicial++;
	}
	var contador = 0;
	for(var i=linha_inicial; i<(linha_inicial+3); i++){
		var celula_atual = getCelula(i,coluna_inicial);
		celula_atual.style.backgroundColor = "black";
		if(contador == 2){
			var j=coluna_inicial;
			j--;
			var nova_celula_atual = getCelula(i,j);
			nova_celula_atual.style.backgroundColor = "black";
		}
		contador ++;
	}	
}

function gerarPeca5(peca,celula_inicial){
	var linha_inicial = getLinhaCelula(celula_inicial);
	var coluna_inicial = getColunaCelula(celula_inicial);
	if(linha_inicial==0){
		linha_inicial++;
	}
	if(coluna_inicial >= (getLarguraTabuleiro()-2)){
		coluna_inicial = getLarguraTabuleiro()-3;
	}
	var contador = 0;
	for(var j=coluna_inicial; j<(coluna_inicial+3); j++){
		var celula_atual = getCelula(linha_inicial,j);
		celula_atual.style.backgroundColor = "black";
		if(contador == 1){
			var i = linha_inicial;
			i --;
			var nova_celula_atual = getCelula(i,j);
			nova_celula_atual.style.backgroundColor = "black";
		}
		contador ++;
	}
}

function gerarPeca6(peca,celula_inicial){
	var linha_inicial = getLinhaCelula(celula_inicial);
	var coluna_inicial = getColunaCelula(celula_inicial);
	if(coluna_inicial >= (getLarguraTabuleiro()-2)){
		coluna_inicial = getLarguraTabuleiro()-3;
	}
	var contador_linha = 0;
	for(var i=linha_inicial; i<(linha_inicial+2); i++){
		var celula_atual = getCelula(i,coluna_inicial);
		celula_atual.style.backgroundColor = "black";
		if(contador_linha == 1){
			var contador_coluna = 0;
			for(var j=coluna_inicial; j<(coluna_inicial+3); j++){
				var nova_celula_atual = getCelula(i,j);
				nova_celula_atual.style.backgroundColor = "black";
				if(contador_coluna == 2){
					var novo_i = i;
					novo_i --;
					nova_celula_atual = getCelula(novo_i,j);
					nova_celula_atual.style.backgroundColor = "black";
				}
				contador_coluna ++;
			}
		}
		contador_linha ++;
	}
}

function gerarPeca7(peca,celula_inicial){
	celula_inicial.style.backgroundColor = "black";
}

function gerarPeca(peca){
	if(!(Peca.isPecaObj(peca))){
		throw "'peca' não é um objeto da classe Peca";
	}
	var celula_inicial = getCelula(0,9);
	switch(peca.tipo){
		case 1:
			gerarPeca1(peca,celula_inicial);
			break;
		case 2:
			gerarPeca2(peca,celula_inicial);
			break;
		case 3:
			gerarPeca3(peca,celula_inicial);
			break;
		case 4:
			gerarPeca4(peca,celula_inicial);
			break;
		case 5:
			gerarPeca5(peca,celula_inicial);
			break;
		case 6:
			gerarPeca6(peca,celula_inicial);
			break;
		case 7:
			gerarPeca7(peca,celula_inicial);
			break;
	}
}