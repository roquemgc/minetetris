"use strict";

function verificarLarguraAltura(largura,altura){
	var msg_erro = "Dimensão inválida de tabuleiro";
	if(largura!=10 || altura!=20){
		if(largura!=22 || altura!=44){
			throw msg_erro;
		}
	}
}

function gerarTabuleiro(largura, altura){
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
	}catch(e){
		console.log(e);
	}
}