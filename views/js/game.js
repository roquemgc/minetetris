"use strict";

function startGame(largura, altura){
	try {
    printarTabuleiro(largura, altura);
    
		var peca = new Peca(5);
		printarPeca(peca);
	} catch(e){
		console.log(e);
	}
}

// Define a função checarTecla para as teclas pressionadas no site
document.onkeydown = checarTecla;

function checarTecla(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
      console.log('cima')
    }
    else if (e.keyCode == '40') {
			console.log('baixo')
    }
    else if (e.keyCode == '37') {
      console.log('esquerda')
    }
    else if (e.keyCode == '39') {
      console.log('direita')
    }
}


function verificarColisao() {
	
	gerarPeca(peca);
}

function aumentarPontuacao(linhaRemovidas) {
  var elemPontuacao = document.getElementById("pontuacao")
  
  elemPontuacao.innerText = parseInt(elemPontuacao.value) + (linhaRemovidas * 10) + (10 * linhaRemovidas -1)
}