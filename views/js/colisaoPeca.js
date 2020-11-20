"use strict";

function pecaColidiu(peca) {
	if (!(Peca.isPecaObj(peca))) {
		throw "'peca' não é um objeto da classe 'Peca'\nfunction 'checarTecla' - game.js";
	}
	var ret = chegouNoFimTabuleiro(peca);
	if (!ret) {
		switch (peca.tipo) {
			case 1:
				ret = colidiuPeca1(peca);
				break;
			case 2:
				ret = colidiuPeca2(peca);
				break;
			case 3:
				ret = colidiuPeca3(peca);
				break;
			case 4:
				ret = colidiuPeca4(peca);
				break;
			case 5:
				ret = colidiuPeca5(peca);
				break;
			case 6:
				ret = colidiuPeca6(peca);
				break;
			case 7:
				ret = colidiuPeca7(peca);
				break;
		}
	}
	return ret;
}

function colidiuPeca1(peca) {
	var ret = false;
	if (peca.direcao == 1 || peca.direcao == 3) {
		var celula_final = peca.coordenadas_preenchidas[3];
		var prox_celula_valor = peca.matriz_tabuleiro[celula_final[0] - 1][celula_final[1]];
		if (prox_celula_valor > 0) {
			ret = true;
		}
	} else {
		for (var i = 0; i < peca.coordenadas_preenchidas.length; i++) {
			var celula_final = peca.coordenadas_preenchidas[i];
			var prox_celula_valor = peca.matriz_tabuleiro[celula_final[0] - 1][celula_final[1]];
			if (prox_celula_valor > 0) {
				ret = true;
				break;
			}
		}
	}
	return ret;
}

function colidiuPeca2(peca) {
	var ret = false;
	for (var i = 2; i < peca.coordenadas_preenchidas.length; i++) {
		var celula_final = peca.coordenadas_preenchidas[i];
		var prox_celula_valor = peca.matriz_tabuleiro[celula_final[0] - 1][celula_final[1]];
		if (prox_celula_valor > 0) {
			ret = true;
			break;
		}
	}
	return ret;
}

function colidiuPeca3(peca) {
	var ret = false;
	for (var i = 0; i < peca.coordenadas_preenchidas.length; i++) {
		var celula_final = null;
		if (peca.direcao == 1 && i >= 2) {
			celula_final = peca.coordenadas_preenchidas[i];
		} else if (peca.direcao == 2 && i >= 1) {
			celula_final = peca.coordenadas_preenchidas[i];
		} else if (peca.direcao == 3 && (i == 1 || i == 3)) {
			celula_final = peca.coordenadas_preenchidas[i];
		} else if (peca.direcao == 4 && i < 3) {
			celula_final = peca.coordenadas_preenchidas[i];
		}
		if (celula_final != null) {
			var prox_celula_valor = peca.matriz_tabuleiro[celula_final[0] - 1][celula_final[1]];
			if (prox_celula_valor > 0) {
				ret = true;
				break;
			}
		}
	}
	return ret;
}

function colidiuPeca4(peca) {
	var ret = false;
	for (var i = 0; i < peca.coordenadas_preenchidas.length; i++) {
		var celula_final = null;
		if (peca.direcao == 1 && i >= 2) {
			celula_final = peca.coordenadas_preenchidas[i];
		} else if (peca.direcao == 2 && i != 1) {
			celula_final = peca.coordenadas_preenchidas[i];
		} else if (peca.direcao == 3 && (i == 1 || i == 3)) {
			celula_final = peca.coordenadas_preenchidas[i];
		} else if (peca.direcao == 4 && i != 2) {
			celula_final = peca.coordenadas_preenchidas[i];
		}
		if (celula_final != null) {
			var prox_celula_valor = peca.matriz_tabuleiro[celula_final[0] - 1][celula_final[1]];
			if (prox_celula_valor > 0) {
				ret = true;
				break;
			}
		}
	}
	return ret;
}

function colidiuPeca5(peca) {
	var ret = false;
	for (var i = 0; i < peca.coordenadas_preenchidas.length; i++) {
		var celula_final = null;
		if (peca.direcao == 1 && i != 2) {
			celula_final = peca.coordenadas_preenchidas[i];
		} else if ((peca.direcao == 2 || peca.direcao == 4) && (i == 0 || i == 2)) {
			celula_final = peca.coordenadas_preenchidas[i];
		} else if (peca.direcao == 3 && i != 1) {
			celula_final = peca.coordenadas_preenchidas[i];
		}
		if (celula_final != null) {
			var prox_celula_valor = peca.matriz_tabuleiro[celula_final[0] - 1][celula_final[1]];
			if (prox_celula_valor > 0) {
				ret = true;
				break;
			}
		}
	}
	return ret;
}

function colidiuPeca6(peca) {
	var ret = false;
	for (var i = 0; i < peca.coordenadas_preenchidas.length; i++) {
		var celula_final = null;
		if (peca.direcao == 1 && i >= 2) {
			celula_final = peca.coordenadas_preenchidas[i];
		} else if ((peca.direcao == 2 || peca.direcao == 4) && i >= 3) {
			celula_final = peca.coordenadas_preenchidas[i];
		} else if (peca.direcao == 3 && (i == 1 || i >= 3)) {
			celula_final = peca.coordenadas_preenchidas[i];
		}
		if (celula_final != null) {
			var prox_celula_valor = peca.matriz_tabuleiro[celula_final[0] - 1][celula_final[1]];
			if (prox_celula_valor > 0) {
				ret = true;
				break;
			}
		}
	}
	return ret;
}

function colidiuPeca7(peca) {
	var ret = false;
	var celula_final = peca.coordenadas_preenchidas[0];
	var prox_celula_valor = peca.matriz_tabuleiro[celula_final[0] - 1][celula_final[1]];
	if (prox_celula_valor > 0) {
		ret = true;
	}
	return ret;
}

function chegouNoFimTabuleiro(peca) {
	var ret = false;
	switch (peca.tipo) {
		case 1:
			ret = chegouNoFimTabuleiroPeca1(peca);
			break;
		case 2:
			ret = chegouNoFimTabuleiroPeca2(peca);
			break;
		case 3:
			ret = chegouNoFimTabuleiroPeca3(peca);
			break;
		case 4:
			ret = chegouNoFimTabuleiroPeca4(peca);
			break;
		case 5:
			ret = chegouNoFimTabuleiroPeca5(peca);
			break;
		case 6:
			ret = chegouNoFimTabuleiroPeca6(peca);
			break;
		case 7:
			ret = chegouNoFimTabuleiroPeca7(peca);
			break;
	}
	return ret;
}

function chegouNoFimTabuleiroPeca1(peca) {
	var ret = false;
	var linha_inicial = peca.coordenadas_preenchidas[0][0];
	if (peca.direcao == 1 || peca.direcao == 3) {
		if (linha_inicial <= 3) {
			ret = true;
		}
	} else {
		if (linha_inicial <= 0) {
			ret = true;
		}
	}
	return ret;
}

function chegouNoFimTabuleiroPeca2(peca) {
	var ret = false;
	var linha_inicial = peca.coordenadas_preenchidas[0][0];
	if (linha_inicial <= 1) {
		ret = true;
	}
	return ret;
}

function chegouNoFimTabuleiroPeca3(peca) {
	var ret = false;
	var linha_inicial = peca.coordenadas_preenchidas[0][0];
	if (peca.direcao == 1 || peca.direcao == 3) {
		if (linha_inicial <= 2) {
			ret = true;
		}
	} else {
		if (peca.direcao == 2 && linha_inicial <= 1) {
			ret = true;
		} else if (peca.direcao == 4 && linha_inicial <= 0) {
			ret = true;
		}
	}
	return ret;
}

function chegouNoFimTabuleiroPeca4(peca) {
	var ret = false;
	var linha_inicial = peca.coordenadas_preenchidas[0][0];
	if (peca.direcao == 1 || peca.direcao == 3) {
		if (linha_inicial <= 2) {
			ret = true;
		}
	} else {
		if (peca.direcao == 2 && linha_inicial <= 0) {
			ret = true;
		} else if (peca.direcao == 4 && linha_inicial <= 1) {
			ret = true;
		}
	}
	return ret;
}

function chegouNoFimTabuleiroPeca5(peca) {
	var ret = false;
	var linha_inicial = peca.coordenadas_preenchidas[0][0];
	if (peca.direcao == 1 || peca.direcao == 2 || peca.direcao == 4) {
		if (linha_inicial <= 0) {
			ret = true;
		}
	} else if (linha_inicial <= 1) {
		ret = true;
	}
	return ret;
}

function chegouNoFimTabuleiroPeca6(peca) {
	var ret = false;
	var linha_inicial = peca.coordenadas_preenchidas[0][0];
	if (peca.direcao == 1 || peca.direcao == 3) {
		if (linha_inicial <= 1) {
			ret = true;
		}
	} else {
		if (linha_inicial <= 2) {
			ret = true;
		}
	}
	return ret;
}

function chegouNoFimTabuleiroPeca7(peca) {
	var ret = false;
	var linha_inicial = peca.coordenadas_preenchidas[0][0];
	if (linha_inicial == 0) {
		ret = true;
	}
	return ret;
}