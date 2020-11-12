class Peca{

	constructor(tipo){
		if(tipo >= 1 && tipo <= 7){
			this._tipo = tipo;
		}else{
			throw "Tipo inválido de peça\nclass Peca - Peca.js";
		}
		set_celula_referencia();
		this._direcao = 1;
	}

	set_celula_referencia(){
		var coluna_aleatoria = Math.floor(Math.random() * getLarguraTabuleiro());
		if(coluna_aleatoria == getLarguraTabuleiro()){
			coluna_aleatoria --;
		}
		if(this._tipo == 2 || this._tipo == 3 || this._tipo == 5){
			if(coluna_aleatoria == (getLarguraTabuleiro()-1)){
				coluna_aleatoria = getLarguraTabuleiro()-2;
			}else{
				if(this._tipo == 5){
					if(coluna_aleatoria == 0){
						coluna_aleatoria = 1;
					}
				}
			}
		}else{
			if(this._tipo == 4){
				if(coluna_aleatoria == 0){
					coluna_aleatoria = 1;
				}
			}else{
				if(this._tipo = 6){
					if(coluna_aleatoria >= (getLarguraTabuleiro()-2)){
						coluna_aleatoria = getLarguraTabuleiro()-3;
					}
				}
			}
		}
		this._celula_referencia = getCelula(0,coluna_aleatoria);
	}

	get tipo(){
		//tipo
		//	1 = i
		//	2 = quadrado 2x2
		//	3 = L
		// 	4 = L invertido
		//	5 = triangulo
		//	6 = barco
		//	7 = especial
		return this._tipo;
	}

	get celula_referencia(){
		return this._celula_referencia;
	}

	mudaDirecao(){
		this._direcao ++;
		if(this._direcao > 4){
			this._direcao = 1;
		}
	}

	get direcao(){
		//dircao
		// 1 - p/ cima
		// 2 - p/ direita
		// 3 - p/ baixo
		// 4 - p/esquerda
		return this._direcao;
	}

	static isPecaObj(obj){
		var ret = false;
		if(typeof obj==='object' && obj!==null && obj.constructor.name === 'Peca'){
			ret = true;
		}
		return ret;
	}

}