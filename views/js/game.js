"use strict";

function startGame(largura, altura){
	try {
        var tabuleiro = getMatrizVaziaTabuleiro(largura, altura);
        
        var peca = gerarPecaAleatoria(tabuleiro);
        
    	addPecaNaMatrizTabuleiro(tabuleiro, peca, 1);
        printarTabuleiro(tabuleiro);
        
        document.onkeydown = function(){ checarTecla(tabuleiro, peca); };

    	temporizador();

    	var delayQueda = 1000;
        // Chama a função peca.moverBaixo() em intervalos de 1000 milisegundos
        setInterval(() => {
            acelerarPeca(tabuleiro,peca);
        }, delayQueda);	
	} catch(error){
		console.log(error);
	}
}

function temporizador(){
        
    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const inicio = Date.now();

    setInterval(function(){
        const agora = Date.now() - inicio;
        var minutos = Math.floor((agora % hora) / minuto);
        var segundos = Math.floor((agora % minuto) / segundo);
        document.getElementById("tempo-partida").innerHTML = minutos + "m : " + segundos + "s";
    }, 1000);
}

function checarTecla(tabuleiro, peca) {
	if(!(Peca.isPecaObj(peca))){
		throw "'peca' não é um objeto da classe 'Peca'\nfunction 'checarTecla' - game.js";
	}
    var e = e || window.event;
    if (e.keyCode == '38') {
        // Cima
        e.preventDefault();
        girarPeca(tabuleiro,peca);
    }
    else if (e.keyCode == '40') {
        // Baixo
        e.preventDefault();
        acelerarPeca(tabuleiro,peca);
    }
    else if (e.keyCode == '37') {
        // Esquerda
        e.preventDefault();
        moverPecaPraEsquerda(tabuleiro,peca);
    }
    else if (e.keyCode == '39') {
        // Direita
        e.preventDefault();
        moverpecaPecaPraDireita(tabuleiro,peca);
    }
}

function aumentarPontuacao(linhaRemovidas) {
  var elemPontuacao = document.getElementById("pontuacao")
  
  elemPontuacao.innerText = parseInt(elemPontuacao.value) + ((linhaRemovidas * 10) + (10 * linhaRemovidas -1))
	aumentarDificuldade();
}

function aumentarDificuldade() {
	dif = elemPontuacao / 300;
	delayQueda = (-50) * dif;
	if (delayQueda < 10) {
		delayQueda = 10;
	}
	document.getElementById("nivel-dificuldade").innerHTML = dif;
}
