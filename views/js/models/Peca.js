class Peca{

	constructor(matriz_tabuleiro,tipo){
		this._matriz_tabuleiro = matriz_tabuleiro;
		if(tipo >= 1 && tipo <= 7){
			this._tipo = tipo;
		}else{
			throw "Tipo inválido de peça\nclass Peca - Peca.js";
		}
		this._direcao = 1;
		this._coordenadas_preenchidas = new Array();
		var coluna_aleatoria = this.gerarColunaAleatoria();
		this.preecherCoordenadas((getAlturaTabuleiro(this._matriz_tabuleiro)-1),coluna_aleatoria);
	}

	get matriz_tabuleiro(){
		return this._matriz_tabuleiro;
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

	get direcao(){
		//dircao
		// 1 - p/ cima
		// 2 - p/ direita
		// 3 - p/ baixo
		// 4 - p/esquerda
		return this._direcao;
	}

	get coordenadas_preenchidas(){
		return this._coordenadas_preenchidas;
	}

	static isPecaObj(obj){
		var ret = false;
		if(typeof obj==='object' && obj!==null && obj.constructor.name === 'Peca'){
			ret = true;
		}
		return ret;
	}

	preecherCoordenadas(linha_inicial,coluna_inicial){
		var altura = getAlturaTabuleiro(this._matriz_tabuleiro);
		var largura = getLarguraTabuleiro(this._matriz_tabuleiro);
		switch(this._tipo){

			case 1:
				if(this._direcao == 1 || this._direcao == 3){
					for(var i=linha_inicial; i>=(linha_inicial-3); i--){
						var coordenada = Array();
						coordenada.push(i);
						coordenada.push(coluna_inicial);
						this._coordenadas_preenchidas.push(coordenada);
					}
				}else{
					for(var j=coluna_inicial; j<(coluna_inicial+4); j++){
						var coordenada = Array();
						coordenada.push(linha_inicial);
						coordenada.push(j);
						this._coordenadas_preenchidas.push(coordenada);
					}
				}
				break;

			case 2:
				for(var i=linha_inicial; i>(linha_inicial-2); i--){
					for(var j=coluna_inicial; j<(coluna_inicial+2); j++){
						var coordenada = Array();
						coordenada.push(i);
						coordenada.push(j);
						this._coordenadas_preenchidas.push(coordenada);
					}
				}				
				break;

			case 3:
				if(this._direcao == 1 || this._direcao == 3){
					for(var i=linha_inicial; i>(linha_inicial-3); i--){
						var coordenada = Array();
						coordenada.push(i);
						coordenada.push(coluna_inicial);
						this._coordenadas_preenchidas.push(coordenada);
						if((i==linha_inicial&&this._direcao==3) || (i==(linha_inicial-2)&&this._direcao==1)){
							var j = (this._direcao==3)? coluna_inicial-1 : coluna_inicial+1;
							coordenada = Array();
							coordenada.push(i);
							coordenada.push(j);
							this._coordenadas_preenchidas.push(coordenada);	
						}
					}
				}else{
					for(var j=coluna_inicial; j<(coluna_inicial+3); j++){
						coordenada = Array();
						coordenada.push(linha_inicial);
						coordenada.push(j);
						this._coordenadas_preenchidas.push(coordenada);
						if((j==coluna_inicial&&this._direcao==2) || (j==(coluna_inicial+2)&&this._direcao==4)){
							var i = (this._direcao==2)? linha_inicial-1 : linha_inicial+1;
							coordenada = Array();
							coordenada.push(i);
							coordenada.push(j);
							this._coordenadas_preenchidas.push(coordenada);
						}
					}
				}
				break;

			case 4:
				if(this._direcao == 1 || this._direcao == 3){
					for(var i=linha_inicial; i>(linha_inicial-3); i--){
						var coordenada = Array();
						coordenada.push(i);
						coordenada.push(coluna_inicial);
						this._coordenadas_preenchidas.push(coordenada);
						if((i==linha_inicial&&this._direcao==3) || (i==(linha_inicial-2)&&this._direcao==1)){
							var j = (this._direcao==3)? coluna_inicial+1 : coluna_inicial-1;
							coordenada = Array();
							coordenada.push(i);
							coordenada.push(j);
							this._coordenadas_preenchidas.push(coordenada);	
						}
					}
				}else{
					for(var j=coluna_inicial; j<(coluna_inicial+3); j++){
						coordenada = Array();
						coordenada.push(linha_inicial);
						coordenada.push(j);
						this._coordenadas_preenchidas.push(coordenada);
						if((j==coluna_inicial&&this._direcao==2) || (j==(coluna_inicial+2)&&this._direcao==4)){
							var i = (this._direcao==2)? linha_inicial+1 : linha_inicial-1;
							coordenada = Array();
							coordenada.push(i);
							coordenada.push(j);
							this._coordenadas_preenchidas.push(coordenada);
						}
					}
				}
				break;

			case 5:
				if(this._direcao == 1 || this._direcao == 3){
					if(this._direcao==1 && linha_inicial==(altura-1)){
						linha_inicial--;
					}
					for(var j=coluna_inicial; j<(coluna_inicial+3); j++){
						coordenada = Array();
						coordenada.push(linha_inicial);
						coordenada.push(j);
						this._coordenadas_preenchidas.push(coordenada);
						if(j==(coluna_inicial+1)){
							var i = (this._direcao==1)? linha_inicial+1 : linha_inicial-1;
							coordenada = Array();
							coordenada.push(i);
							coordenada.push(j);
							this._coordenadas_preenchidas.push(coordenada);
						}
					}
				}else{
					for(var i=linha_inicial; i<(linha_inicial+3); i++){
						coordenada = Array();
						coordenada.push(i);
						coordenada.push(coluna_inicial);
						this._coordenadas_preenchidas.push(coordenada);
						if(i==(linha_inicial+1)){
							var j = (this._direcao==2)? coluna_inicial+1 : coluna_inicial-1;
							coordenada = Array();
							coordenada.push(i);
							coordenada.push(j);
							this._coordenadas_preenchidas.push(coordenada);
						}
					}
				}
				break;

		}
	}

	apagarCoordenadas(){
		this._coordenadas_preenchidas = new Array();
	}

	gerarColunaAleatoria(){
		var coluna_aleatoria = 0;
		if(this._tipo == 1 || this._tipo == 7){
			coluna_aleatoria = Math.floor(Math.random() * getLarguraTabuleiro(this._matriz_tabuleiro));
			if(this._tipo == 1 && (this._direcao == 2 || this._direcao == 4)){
				coluna_aleatoria = Math.floor(Math.random() * (getLarguraTabuleiro(this._matriz_tabuleiro)-4));
			}
		}else{
			if(this._tipo == 2){
				coluna_aleatoria = Math.floor(Math.random() * (getLarguraTabuleiro(this._matriz_tabuleiro)-2));
			}else{
				if(this._direcao == 1 || this._direcao == 3){
					coluna_aleatoria = Math.floor(Math.random() * (getLarguraTabuleiro(this._matriz_tabuleiro)-2));
				}else{
					coluna_aleatoria = Math.floor(Math.random() * (getLarguraTabuleiro(this._matriz_tabuleiro)-3));
				}
			}
		}
		return coluna_aleatoria;
	}

	moverDireita(){
		var linha_inicial = this._coordenadas_preenchidas[0][0];
		var coluna_inicial = this._coordenadas_preenchidas[0][1] + 1;
		this.apagarCoordenadas();
		this.preecherCoordenadas(linha_inicial,coluna_inicial);
	}

	moverEsquerda(){
		var linha_inicial = this._coordenadas_preenchidas[0][0];
		var coluna_inicial = this._coordenadas_preenchidas[0][1] - 1;
		this.apagarCoordenadas();
		this.preecherCoordenadas(linha_inicial,coluna_inicial);
	}

	moverBaixo(){
		var linha_inicial = this._coordenadas_preenchidas[0][0] - 1;
		var coluna_inicial = this._coordenadas_preenchidas[0][1];
		this.apagarCoordenadas();
		this.preecherCoordenadas(linha_inicial,coluna_inicial);
	}

	girar(){
		this._direcao ++;
		if(this._direcao > 4){
			this._direcao = 1;
		}
		var linha_inicial = this._coordenadas_preenchidas[0][0];
		var coluna_inicial = this._coordenadas_preenchidas[0][1];
		this.apagarCoordenadas();
		this.preecherCoordenadas(linha_inicial,coluna_inicial);
	}

}