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
    // 38 = seta pra cima
    if (e.keyCode == '38') {
      girarPeca();
    }
    // 40 = seta pra baixo
    else if (e.keyCode == '40') {
			acelerarPeca();
    }
    // 37 = seta pra esquerda
    else if (e.keyCode == '37') {
      moverPecaPraEsquerda();
    }
    // 39 = seta pra direita
    else if (e.keyCode == '39') {
      moverpecaPecaPraDireita();
    }
}

function verificarColisao() {
	
	gerarPeca(peca);
}

function aumentarPontuacao(linhaRemovidas) {
  var elemPontuacao = document.getElementById("pontuacao")
  
  elemPontuacao.innerText = parseInt(elemPontuacao.value) + (linhaRemovidas * 10) + (10 * linhaRemovidas -1)
}