"use strict";

var isRightSpin = true;
var needAdaptationOfTheMovementsOfThePieces = false;
var changeTheKeys = false;
var intervalTemporizador = null;
var tempoPartida = {"minutos":0, "segundos":0};

function startGame(largura, altura){
	try {
		changeTheKeys = document.querySelector('#toggleInput').checked;
		var tabuleiro = getMatrizVaziaTabuleiro(largura, altura);
		var peca = gerarPecaAleatoria(tabuleiro);
		//var peca = new Peca(tabuleiro,1);
		addPecaNaMatrizTabuleiro(tabuleiro, peca);
		printarTabuleiro(tabuleiro);
		document.onkeydown = function(){ checarTecla(tabuleiro, peca); };
		temporizador();
		rodada(tabuleiro,peca);
	} catch(error){
		console.log(error);
	}
}

function rodada(tabuleiro, peca){
	// Chama a função peca.moverBaixo() em intervalos de 1000 milisegundos
	var delayQueda = 1000;
	var quedaPeca = setInterval(async () => {
		acelerarPeca(tabuleiro,peca);
		await checarLinhasCheias(tabuleiro);
		if(pecaColidiu(peca)){
			clearInterval(quedaPeca);
			if(isGameOver(tabuleiro)){
				return;
			}
			peca = gerarPecaAleatoria(tabuleiro);
			//peca = new Peca(tabuleiro,6);
			addPecaNaMatrizTabuleiro(tabuleiro, peca);
			printarTabuleiro(tabuleiro);
			document.onkeydown = function(){ checarTecla(tabuleiro, peca); };
			rodada(tabuleiro,peca);
		}
	}, delayQueda);
}

function temporizador(){
		
	const segundo = 1000;
	const minuto = segundo * 60;
	const hora = minuto * 60;
	const inicio = Date.now();

	intervalTemporizador = setInterval(function(){
		const agora = Date.now() - inicio;
		tempoPartida["minutos"] = Math.floor((agora % hora) / minuto);
		tempoPartida["segundos"] = Math.floor((agora % minuto) / segundo);
		document.getElementById("tempo-partida").innerHTML = tempoPartida["minutos"] + "m : " + tempoPartida["segundos"] + "s";
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

		if(needAdaptationOfTheMovementsOfThePieces && !changeTheKeys){
			acelerarPeca(tabuleiro,peca);
		}else{
			girarPeca(tabuleiro,peca);
		}
	} else if (e.keyCode == '40') {
		// Baixo
		e.preventDefault();

		if(needAdaptationOfTheMovementsOfThePieces && !changeTheKeys){

			girarPeca(tabuleiro,peca);

		}else{
			acelerarPeca(tabuleiro,peca);
		}
	}
	else if (e.keyCode == '37') {
		// Esquerda
		e.preventDefault();
		
		if(needAdaptationOfTheMovementsOfThePieces && !changeTheKeys){

			moverpecaPecaPraDireita(tabuleiro,peca);

		}else{

			moverPecaPraEsquerda(tabuleiro,peca);

		}
	   
	}
	else if (e.keyCode == '39') {
		// Direita
		e.preventDefault();

		if(needAdaptationOfTheMovementsOfThePieces && !changeTheKeys){

			moverPecaPraEsquerda(tabuleiro,peca);
		}else{
			moverpecaPecaPraDireita(tabuleiro,peca);
		}
	}
}

async function checarLinhasCheias(tabuleiro) {	
	var cont = 0;
	var linhasCheias = [];
	var pecaEspecial = false;
	tabuleiro.forEach((linha, posicao) => {
		linha.forEach(bloco => {
			if(bloco !== 0) {
				cont++;
			}
		})
		if(cont >= linha.length) {
			linhasCheias.push(posicao);
			linha.forEach(bloco => {
				if(bloco == 7) {
					pecaEspecial = true;
				}
			})
		}
		cont = 0;
	});

	if(linhasCheias.length > 0) {
		limparLinhas(tabuleiro, linhasCheias);
		// aumentarPontuacao(linhasCheias.length);
		if(pecaEspecial) {
			actionSpinningGame();
		}
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

function actionSpinningGame(){

	var animationSpinningGame = document.getElementById('rolling-tetris'); 

	if(isRightSpin){

		animationSpinningGame.classList.toggle('spinningRollingTetris');
		isRightSpin = !isRightSpin; 
		needAdaptationOfTheMovementsOfThePieces = !needAdaptationOfTheMovementsOfThePieces;
	}else{

		animationSpinningGame.classList.toggle('backToNormalRollingTetris');
		isRightSpin = !isRightSpin; 
		needAdaptationOfTheMovementsOfThePieces = !needAdaptationOfTheMovementsOfThePieces;
	
	}

}

function isGameOver(tabuleiro){
	var ret = false;
	var linhaFinal = getAlturaTabuleiro(tabuleiro) - 1;
	tabuleiro[linhaFinal].forEach(bloco => {
		if(bloco != 0){
			ret = true;
		}
	});
	if(ret){
		clearInterval(intervalTemporizador);
		var text = "Game Over";
		text += "\nTempo de partida: " + tempoPartida["minutos"] + "m";
		text += " " + tempoPartida["segundos"] + "s";
		window.alert(text);
	}
	return ret;
}