"use strict";

function setCelulaPecaBackground(celula){
	celula.style.backgroundColor = "black";
}

function printarPeca1(peca){
	var linha_inicial = getLinhaCelula(peca.celula_referencia);
	var coluna_inicial = getColunaCelula(peca.celula_referencia);
	for(var i=linha_inicial; i<(linha_inicial+4); i++){
		var celula_atual = getCelula(i,j);
		setCelulaPecaBackground(celula_atual);
	}
}

function printarPeca2(peca){
	var linha_inicial = getLinhaCelula(peca.celula_referencia);
	var coluna_inicial = getColunaCelula(peca.celula_referencia);
	for(var i=linha_inicial; i<(linha_inicial+2); i++){
		for(var j=coluna_inicial; j<(coluna_inicial+2); j++){
			var celula_atual = getCelula(i,j);
			setCelulaPecaBackground(celula_atual);
		}
	}
}

function printarPeca3(peca){
	var linha_inicial = getLinhaCelula(peca.celula_referencia);
	var coluna_inicial = getColunaCelula(peca.celula_referencia);
	var contador = 0;
	for(var i=linha_inicial; i<(linha_inicial+3); i++){
		var celula_atual = getCelula(i,coluna_inicial);
		setCelulaPecaBackground(celula_atual);
		if(contador == 2){
			var j=coluna_inicial;
			j++;
			var nova_celula_atual = getCelula(i,j);
			setCelulaPecaBackground(nova_celula_atual);
		}
		contador ++;
	}
}

function printarPeca4(peca){
	var linha_inicial = getLinhaCelula(peca.celula_referencia);
	var coluna_inicial = getColunaCelula(peca.celula_referencia);
	var contador = 0;
	for(var i=linha_inicial; i<(linha_inicial+3); i++){
		var celula_atual = getCelula(i,coluna_inicial);
		setCelulaPecaBackground(celula_atual);
		if(contador == 2){
			var j=coluna_inicial;
			j--;
			var nova_celula_atual = getCelula(i,j);
			setCelulaPecaBackground(nova_celula_atual);
		}
		contador ++;
	}	
}

function printarPeca5(peca){
	var linha_inicial = getLinhaCelula(peca.celula_referencia);
	var coluna_inicial = getColunaCelula(peca.celula_referencia);
	setCelulaPecaBackground(peca.celula_referencia);
	var linha_atual = linha_inicial + 1;
	var celula_atual = getCelula(linha_atual,coluna_inicial);
	setCelulaPecaBackground(celula_atual);
	var coluna_atual = coluna_inicial - 1;
	celula_atual = getCelula(linha_atual,coluna_atual);
	setCelulaPecaBackground(celula_atual);
	coluna_atual = coluna_inicial + 1;
	celula_atual = getCelula(linha_atual,coluna_atual);
	setCelulaPecaBackground(celula_atual);
}

function printarPeca6(peca){
	var linha_inicial = getLinhaCelula(peca.celula_referencia);
	var coluna_inicial = getColunaCelula(peca.celula_referencia);
	var contador_linha = 0;
	for(var i=linha_inicial; i<(linha_inicial+2); i++){
		var celula_atual = getCelula(i,coluna_inicial);
		setCelulaPecaBackground(celula_atual);
		if(contador_linha == 1){
			var contador_coluna = 0;
			for(var j=coluna_inicial; j<(coluna_inicial+3); j++){
				var nova_celula_atual = getCelula(i,j);
				setCelulaPecaBackground(nova_celula_atual);
				if(contador_coluna == 2){
					var novo_i = i;
					novo_i --;
					nova_celula_atual = getCelula(novo_i,j);
					setCelulaPecaBackground(nova_celula_atual);
				}
				contador_coluna ++;
			}
		}
		contador_linha ++;
	}
}

function printarPeca7(peca){
	setCelulaPecaBackground(peca.celula_referencia);
}

function printarPeca(peca){
	if(!(Peca.isPecaObj(peca))){
		throw "'peca' não é um objeto da classe Peca";
	}
	switch(peca.tipo){
		case 1:
			printarPeca1(peca);
			break;
		case 2:
			printarPeca2(peca);
			break;
		case 3:
			printarPeca3(peca);
			break;
		case 4:
			printarPeca4(peca);
			break;
		case 5:
			printarPeca5(peca);
			break;
		case 6:
			printarPeca6(peca);
			break;
		case 7:
			printarPeca7(peca);
			break;
	}
}