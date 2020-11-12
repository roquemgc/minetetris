"use strict";

function startGame(largura, altura){
	try {
		var tabuleiro = getMatrizVaziaTabuleiro(largura,altura);
    	var peca = new Peca(tabuleiro,5);
    
		addPecaNaMatrizTabuleiro(tabuleiro,peca,1);
   		printarTabuleiro(tabuleiro);
    
    	document.onkeydown = function(){checarTecla(tabuleiro,peca);};
    
	} catch(error){
		console.log(error);
	}
}

function checarTecla(tabuleiro, peca) {
	if(!(Peca.isPecaObj(peca))){
		throw "'peca' não é um objeto da classe 'Peca'\nfunction 'checarTecla' - game.js";
	}
    var e = e || window.event;
    if(e.keyCode == '37' || e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40'){
      e.preventDefault();
    	moverPeca(tabuleiro, peca, e.keyCode);
    }
}

function moverPeca(tabuleiro,peca,keyCode){
	if (keyCode == '38') {
    	// Cima
    	removePecaNaMatrizTabuleiro(tabuleiro,peca);
    	peca.girar();
    	addPecaNaMatrizTabuleiro(tabuleiro,peca,1);
    	printarTabuleiro(tabuleiro);
    }
    else if (keyCode == '40') {
    	// Baixo
    	removePecaNaMatrizTabuleiro(tabuleiro,peca);
    	peca.moverBaixo();
    	addPecaNaMatrizTabuleiro(tabuleiro,peca,1);
    	printarTabuleiro(tabuleiro);
    }
    else if (keyCode == '37') {
      	// Esquerda
		removePecaNaMatrizTabuleiro(tabuleiro,peca);
		peca.moverEsquerda();
		addPecaNaMatrizTabuleiro(tabuleiro,peca,1);
		printarTabuleiro(tabuleiro);
    }
    else if (keyCode == '39') {
    	// Direita
    	removePecaNaMatrizTabuleiro(tabuleiro,peca);
    	peca.moverDireita();
    	addPecaNaMatrizTabuleiro(tabuleiro,peca,1);
    	printarTabuleiro(tabuleiro);
    }
    else{
    	throw "'keyCode' inválido 'Peca'\nfunction 'moverPeca' - game.js";	
    }
}

function verificarColisao() {
	
	gerarPeca(peca);
}

function aumentarPontuacao(linhaRemovidas) {
  var elemPontuacao = document.getElementById("pontuacao")
  
  elemPontuacao.innerText = parseInt(elemPontuacao.value) + ((linhaRemovidas * 10) + (10 * linhaRemovidas -1))
}