"use strict";

function aumentarPontuacao(linhaRemovidas) {
  var elemPontuacao = document.getElementById("pontuacao")
  
  elemPontuacao.innerText = parseInt(elemPontuacao.value) + (linhaRemovidas * 10) + (10 * linhaRemovidas -1)
}