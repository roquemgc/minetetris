"use strict";

function startGame(largura, altura){
	try {
    var tabuleiro = getMatrizVaziaTabuleiro(largura, altura);
    // Gera um integer entre 1 e 5 = Math.floor(Math.random() * 6) + 1
    var peca = new Peca(tabuleiro, 1);
    
		addPecaNaMatrizTabuleiro(tabuleiro, peca, 1);
    printarTabuleiro(tabuleiro);
    
    document.onkeydown = function(){ checarTecla(tabuleiro, peca); };

    // Chama a função peca.moverBaixo(), passando a peca e o tabuleiro
    setInterval(() => {
      moverPeca(tabuleiro, peca, 40);
    }, 1000);	

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


function moverPeca(tabuleiro, peca, keyCode){
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

function aumentarPontuacao(linhaRemovidas) {
  var elemPontuacao = document.getElementById("pontuacao")
  
  elemPontuacao.innerText = parseInt(elemPontuacao.value) + ((linhaRemovidas * 10) + (10 * linhaRemovidas -1))
}