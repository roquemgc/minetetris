"use strict";

var isRightSpin = true;
var needAdaptationOfTheMovementsOfThePieces = false;
var changeTheKeys = false;
var intervalTemporizador = null;
var tempoPartida = {"minutos":0, "segundos":0};
var soundFundo = new Audio();
var delayQueda = 1000;

function startGame(largura, altura){
	try {
		playSoundFundo();
		changeTheKeys = document.querySelector('#toggleInput').checked;
		var tabuleiro = getMatrizVaziaTabuleiro(largura, altura);
		var peca = gerarPecaAleatoria(tabuleiro);
		peca = new Peca(tabuleiro, 7)
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
	var quedaPeca = setInterval(() => {
		acelerarPeca(tabuleiro,peca);
		if(pecaColidiu(peca)){
			clearInterval(quedaPeca);
			playSoundColisao();

			var linhas = limparLinhas(tabuleiro);
			// console.log(linhas);
			// console.log(temPecaEspecial)
			if(linhas) {
				aumentarPontuacao(linhas);
				// if(temPecaEspecial) {
				// 	actionSpinningGame();
				// }
			}

			if(isGameOver(tabuleiro)){
				return;
			}

			peca = gerarPecaAleatoria(tabuleiro);
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

function aumentarPontuacao(linhasRemovidas) {
	const elemPontuacao = document.getElementById("pontuacao");
	const elemLinhasEliminadas =  document.getElementById("linhas-eliminadas");
	var pontuacao = parseInt(elemPontuacao.innerText) + ((linhasRemovidas * 10) * linhasRemovidas);

	elemPontuacao.innerText = pontuacao;
	elemLinhasEliminadas.innerText = parseInt(elemLinhasEliminadas.innerText) + linhasRemovidas;

	aumentarDificuldade(pontuacao);
}

function aumentarDificuldade(pontuacao) {
	const elemDificuldade = document.getElementById("nivel-dificuldade");

	var dif = pontuacao / 300;
	delayQueda -= 50 * Math.trunc(dif);

	elemDificuldade.innerText = Math.trunc(dif) + 1;
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
		stopSoundFundo();
		var text = "Game Over";
		text += "\nTempo de partida: " + tempoPartida["minutos"] + "m";
		text += " " + tempoPartida["segundos"] + "s";
		window.alert(text);
	}
	return ret;
}

function playSound(filename,loop,volume){
	var audio = new Audio('../lib/sound/'+filename);
	audio.loop = loop;
	audio.volume = volume;
	audio.play();
	return audio;
}

function playSoundFundo(){
	soundFundo = playSound("fundo.mp3",true,0.01);
}

function stopSoundFundo(){
	soundFundo.pause();
}

function playSoundColisao(){
	playSound("colisao.mp3",false,0.5);
}

function playSoundLimparLinhas(){
	playSound("limparLinhas.mp3",false,0.5);
}

function playSoundSpinning(){
	playSound("spinning.mp3",false,0.5);
}