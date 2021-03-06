class Peca{

	constructor(matriz_tabuleiro, tipo){
		this._matriz_tabuleiro = matriz_tabuleiro;
		if(tipo >= 1 && tipo <= 7){
			this._tipo = tipo;
		}else{
			throw "Tipo inválido de peça\nclass Peca - Peca.js";
		}
		// Gera direcao aleatoria
		this._direcao = Math.floor(Math.random() * 4) + 1;
		// Preeche as coordenas da peca a partir do início do tabuleiro e de uma coluna aleatória
		this._coordenadas_preenchidas = new Array();
		this.preecherCoordenadas(this.getLinhaInicial(),this.gerarColunaAleatoria());
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

	getLinhaInicial(){
		var linha = getAlturaTabuleiro(this._matriz_tabuleiro);
		switch(this._tipo){
			case 1:
				linha += (this._direcao == 1 || this._direcao == 3)? 3 : 0;
				break;
			case 2:
				linha += 1;
				break;
			case 3:
				linha += (this._direcao == 1 || this._direcao == 3)? 2 : 1;
				break;
			case 4:
				linha += (this._direcao == 1 || this._direcao == 3)? 2 : 0;
				break;
			case 5:
				linha += 0;
				break;
			case 6:
				linha += (this._direcao == 1 || this._direcao == 3)? 1 : 2;
				break;
			case 7:
				linha += 0;
				break;
			default:
				linha += 3;
				break;
		}
		return linha;
	}

	addCoordenadaPreenchida(linha,coluna){
		var coordenada = Array();
		coordenada.push(linha);
		coordenada.push(coluna);
		this._coordenadas_preenchidas.push(coordenada);
	}

	static isPecaObj(obj){
		var ret = false;
		if(typeof obj==='object' && obj!==null && obj.constructor.name === 'Peca'){
			ret = true;
		}
		return ret;
	}

	copiarConjCoordenadas(conj_entrada){
		var conj_saida = new Array();
		if(conj_entrada.length > 0){
			for(var i=0; i<conj_entrada.length; i++){
				var celula = new Array();
				for(var j=0; j<conj_entrada[i].length; j++){
					celula.push(conj_entrada[i][j]);
				}
			}
			conj_saida.push(celula);
		}
		return conj_saida
	}

	copiarConjCoordenadas(conj_entrada,conj_saida){
		if(conj_entrada.length > 0){
			for(var i=0; i<conj_entrada.length; i++){
				var celula = new Array();
				for(var j=0; j<conj_entrada[i].length; j++){
					celula.push(conj_entrada[i][j]);
				}
			}
			conj_saida.push(celula);
		}
	}

	preecherCoordenadas(linha_inicial,coluna_inicial){
		var coordenas_antigas = new Array();
		this.copiarConjCoordenadas(this._coordenadas_preenchidas,coordenas_antigas);
		this.apagarCoordenadas();
		var ret = false;
		switch(this._tipo){
			case 1:
				ret = this.preecherCoordenadasPeca1(linha_inicial,coluna_inicial);
				break;
			case 2:
				ret = this.preecherCoordenadasPeca2(linha_inicial,coluna_inicial);				
				break;
			case 3:
				ret = this.preecherCoordenadasPeca3(linha_inicial,coluna_inicial);
				break;
			case 4:
				ret = this.preecherCoordenadasPeca4(linha_inicial,coluna_inicial);
				break;
			case 5:
				ret = this.preecherCoordenadasPeca5(linha_inicial,coluna_inicial);
				break;
			case 6:
				ret = this.preecherCoordenadasPeca6(linha_inicial,coluna_inicial);
				break;
			case 7:
				ret = this.preecherCoordenadasPeca7(linha_inicial,coluna_inicial);
				break;
		}
		if(!ret){
			this.copiarConjCoordenadas(coordenas_antigas,this._coordenadas_preenchidas);
		}
		return ret;
	}

	preecherCoordenadasPeca1(linha_inicial,coluna_inicial){
		var largura = getLarguraTabuleiro(this._matriz_tabuleiro);
		var ret = true;
		if(this._direcao == 1 || this._direcao == 3){
			for(var i=linha_inicial; i>=(linha_inicial-3); i--){
				if(this._matriz_tabuleiro[i][coluna_inicial]!=0){
					ret = false;
					break;
				}
				this.addCoordenadaPreenchida(i,coluna_inicial);
			}
		}else{
			if(coluna_inicial > (largura-4)){
				coluna_inicial = largura - 4;
			}
			for(var j=coluna_inicial; j<(coluna_inicial+4); j++){
				if(this._matriz_tabuleiro[linha_inicial][j]!=0){
					ret = false;
					break;
				}
				this.addCoordenadaPreenchida(linha_inicial,j);
			}
		}
		return ret;
	}

	preecherCoordenadasPeca2(linha_inicial,coluna_inicial){
		var ret = true;
		for(var i=linha_inicial; i>(linha_inicial-2); i--){
			for(var j=coluna_inicial; j<(coluna_inicial+2); j++){
				if(this._matriz_tabuleiro[i][j]!=0){
					ret = false;
					break;
				}
				this.addCoordenadaPreenchida(i,j);
			}
		}
		return ret;
	}

	preecherCoordenadasPeca3(linha_inicial,coluna_inicial){
		var altura = getAlturaTabuleiro(this._matriz_tabuleiro) + 3;
		var largura = getLarguraTabuleiro(this._matriz_tabuleiro);
		var ret = true;
		if(this._direcao == 1 || this._direcao == 3){
			if(this._direcao == 3 && coluna_inicial == 0){
				coluna_inicial = 1;
			}
			for(var i=linha_inicial; i>(linha_inicial-3); i--){
				if(this._matriz_tabuleiro[i][coluna_inicial]!=0){
					ret = false;
					break;
				}
				this.addCoordenadaPreenchida(i,coluna_inicial);
				if((i==linha_inicial&&this._direcao==3) || (i==(linha_inicial-2)&&this._direcao==1)){
					var j = (this._direcao==3)? coluna_inicial-1 : coluna_inicial+1;
					if(this._matriz_tabuleiro[i][j]!=0){
						ret = false;
						break;
					}
					this.addCoordenadaPreenchida(i,j);
				}
			}
		}else{
			if(this._direcao == 4 && linha_inicial == (altura-1)){
				linha_inicial = altura - 2;
			}
			if(coluna_inicial > (largura - 3)){
				coluna_inicial = largura - 3;
			}
			for(var j=coluna_inicial; j<(coluna_inicial+3); j++){
				if(this._matriz_tabuleiro[linha_inicial][j]!=0){
					ret = false;
					break;
				}
				this.addCoordenadaPreenchida(linha_inicial,j);
				if((j==coluna_inicial&&this._direcao==2) || (j==(coluna_inicial+2)&&this._direcao==4)){
					var i = (this._direcao==2)? linha_inicial-1 : linha_inicial+1;
					if(this._matriz_tabuleiro[i][j]!=0){
						ret = false;
						break;
					}
					this.addCoordenadaPreenchida(i,j);
				}
			}
		}
		return ret;
	}

	preecherCoordenadasPeca4(linha_inicial,coluna_inicial){
		var altura = getAlturaTabuleiro(this._matriz_tabuleiro) + 3;
		var largura = getLarguraTabuleiro(this._matriz_tabuleiro);
		var ret = true;
		if(this._direcao == 1 || this._direcao == 3){
			if(this._direcao == 1 && coluna_inicial == 0){
				coluna_inicial = 1;
			}
			for(var i=linha_inicial; i>(linha_inicial-3); i--){
				if(this._matriz_tabuleiro[i][coluna_inicial]!=0){
					ret = false;
					break;
				}
				this.addCoordenadaPreenchida(i,coluna_inicial);
				if((i==linha_inicial&&this._direcao==3) || (i==(linha_inicial-2)&&this._direcao==1)){
					var j = (this._direcao==3)? coluna_inicial+1 : coluna_inicial-1;
					if(this._matriz_tabuleiro[i][j]!=0){
						ret = false;
						break;
					}
					this.addCoordenadaPreenchida(i,j);
				}
			}
		}else{
			if(this._direcao == 2 && linha_inicial == (altura-1)){
				linha_inicial = altura - 2;	
			}
			if(coluna_inicial > (largura-3)){
				coluna_inicial = largura - 3;
			}
			for(var j=coluna_inicial; j<(coluna_inicial+3); j++){
				if(this._matriz_tabuleiro[linha_inicial][j]!=0){
					ret = false;
					break;
				}
				this.addCoordenadaPreenchida(linha_inicial,j);
				if((j==coluna_inicial&&this._direcao==2) || (j==(coluna_inicial+2)&&this._direcao==4)){
					var i = (this._direcao==2)? linha_inicial+1 : linha_inicial-1;
					if(this._matriz_tabuleiro[i][j]!=0){
						ret = false;
						break;
					}
					this.addCoordenadaPreenchida(i,j);
				}
			}
		}
		return ret;
	}

	preecherCoordenadasPeca5(linha_inicial,coluna_inicial){
		var altura = getAlturaTabuleiro(this._matriz_tabuleiro)+3;
		var largura = getLarguraTabuleiro(this._matriz_tabuleiro);
		var ret = true;
		if(this._direcao == 1 || this._direcao == 3){
			if(coluna_inicial > (largura-3)){
				coluna_inicial = largura - 3;
			}
			if(this._direcao==1 && linha_inicial==altura){
				linha_inicial--;
			}
			for(var j=coluna_inicial; j<(coluna_inicial+3); j++){
				if(this._matriz_tabuleiro[linha_inicial][j]!=0){
					ret = false;
					break;
				}
				this.addCoordenadaPreenchida(linha_inicial,j);
				if(j==(coluna_inicial+1)){
					var i = (this._direcao==1)? linha_inicial+1 : linha_inicial-1;
					if(this._matriz_tabuleiro[linha_inicial][j]!=0){
						ret = false;
						break;
					}
					this.addCoordenadaPreenchida(i,j);
				}
			}
		}else{
			if(linha_inicial >= altura-2){
				linha_inicial = altura-3;
			}
			if(this._direcao == 4 && coluna_inicial == 0){
				coluna_inicial = 1;
			}
			for(var i=linha_inicial; i<(linha_inicial+3); i++){
				if(this._matriz_tabuleiro[i][coluna_inicial]!=0){
					ret = false;
					break;
				}
				this.addCoordenadaPreenchida(i,coluna_inicial);
				if(i==(linha_inicial+1)){
					var j = (this._direcao==2)? coluna_inicial+1 : coluna_inicial-1;
					if(this._matriz_tabuleiro[i][j]!=0){
						ret = false;
						break;
					}
					this.addCoordenadaPreenchida(i,j);
				}
			}
		}
		return ret;	
	}

	preecherCoordenadasPeca6(linha_inicial,coluna_inicial){
		var altura = getAlturaTabuleiro(this._matriz_tabuleiro) + 3;
		var largura = getLarguraTabuleiro(this._matriz_tabuleiro);
		var ret = true;
		if(this._direcao==1 || this._direcao==3){
			if(coluna_inicial > (largura-3)){
				coluna_inicial = largura - 3;
			}
			for(var i=linha_inicial; i>(linha_inicial-2); i--){
				for(var j=coluna_inicial; j<(coluna_inicial+3); j++){
					if(!(this._direcao==1 && i==linha_inicial && j==coluna_inicial+1) &&
						!(this._direcao==3 && i==linha_inicial-1 && j==coluna_inicial+1)){
						if(this._matriz_tabuleiro[i][j]!=0){
							ret = false;
							break;
						}
						this.addCoordenadaPreenchida(i,j);
					}
				}
			}
		}else{
			for(var i=linha_inicial; i>(linha_inicial-3); i--){
				for(var j=coluna_inicial; j<(coluna_inicial+2); j++){
					if(!(this._direcao==2 && i==linha_inicial-1 && j==coluna_inicial+1) &&
						!(this._direcao==4 && i==linha_inicial-1 && j==coluna_inicial)){
						if(this._matriz_tabuleiro[i][j]!=0){
							ret = false;
							break;
						}
						this.addCoordenadaPreenchida(i,j);
					}
				}
			}
		}
		return ret;
	}

	preecherCoordenadasPeca7(linha_inicial,coluna_inicial){
		var ret = true;
		if(this._matriz_tabuleiro[linha_inicial][coluna_inicial]!=0){
			ret = false;
		}else{
			this.addCoordenadaPreenchida(linha_inicial,coluna_inicial);
		}
		return ret;
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
		if(!pecaColidiu(this)){
			var linha_inicial = this._coordenadas_preenchidas[0][0];
			var coluna_inicial = this._coordenadas_preenchidas[0][1] + 1;
			var verificador = false;
			switch(this._tipo){
				case 1:
					verificador = this.podeMoverDireitaPeca1(coluna_inicial);
					break;
				case 2:
					verificador = this.podeMoverDireitaPeca2(coluna_inicial);
					break;
				case 3:
					verificador = this.podeMoverDireitaPeca3(coluna_inicial);
					break;
				case 4:
					verificador = this.podeMoverDireitaPeca4(coluna_inicial);
					break;
				case 5:
					verificador = this.podeMoverDireitaPeca5(coluna_inicial);
					break;
				case 6:
					verificador = this.podeMoverDireitaPeca6(coluna_inicial);
					break;
				case 7:
					verificador = this.podeMoverDireitaPeca7(coluna_inicial);
					break;
				default:
					verificador = false;
					break;
			}
			if(verificador){
				var ret = this.preecherCoordenadas(linha_inicial,coluna_inicial);
				if(!ret){
					coluna_inicial = this._coordenadas_preenchidas[0][1] - 1;
					this.preecherCoordenadas(linha_inicial,coluna_inicial);
				}
			}
		}
	}

	podeMoverDireitaPeca1(coluna_inicial){
		var verificador = false;
		if(this._direcao == 1 || this._direcao == 3){
			if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-1)){
				verificador = true;
			}
		}else{
			if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-4)){
				verificador = true;
			}
		}
		return verificador;
	}

	podeMoverDireitaPeca2(coluna_inicial){
		var verificador = false;
		if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-2)){
			verificador = true;
		}
		return verificador;
	}

	podeMoverDireitaPeca3(coluna_inicial){
		var verificador = false;
		if(this._direcao == 2 || this._direcao == 4){
			if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-3)){
				verificador = true;
			}
		}else{
			if(this._direcao == 1){
				if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-2)){
					verificador = true;
				}
			}else{
				if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-1)){
					verificador = true;
				}
			}
		}
		return verificador;
	}

	podeMoverDireitaPeca4(coluna_inicial){
		var verificador = false;
		if(this._direcao == 2 || this._direcao == 4){
			if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-3)){
				verificador = true;
			}
		}else{
			if(this._direcao == 1){
				if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-1)){
					verificador = true;
				}
			}else{
				if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-2)){
					verificador = true;
				}
			}
		}
		return verificador;
	}

	podeMoverDireitaPeca5(coluna_inicial){
		var verificador = false;
		if(this._direcao == 1 || this._direcao == 3){
			if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-3)){
				verificador = true;
			}
		}else{
			if(this._direcao == 2){
				if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-2)){
					verificador = true;
				}
			}else{
				if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-1)){
					verificador = true;
				}
			}	
		}
		return verificador;
	}

	podeMoverDireitaPeca6(coluna_inicial){
		var verificador = false;
		if(this._direcao == 1 || this._direcao == 3){
			if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-3)){
				verificador = true;
			}
		}else{
			if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-2)){
				verificador = true;
			}
		}
		return verificador;
	}

	podeMoverDireitaPeca7(coluna_inicial){
		var verificador = false;
		if(coluna_inicial <= (getLarguraTabuleiro(this._matriz_tabuleiro)-1)){
			verificador = true;
		}
		return verificador;
	}

	moverEsquerda(){
		if(!pecaColidiu(this)){
			var linha_inicial = this._coordenadas_preenchidas[0][0];
			var coluna_inicial = this._coordenadas_preenchidas[0][1] - 1;
			var verificador = false;
			if((this._tipo == 3 && this._direcao == 3) || (this._tipo == 4 && this._direcao == 1)
				|| (this._tipo == 5 && this._direcao == 4)){
				if(coluna_inicial >= 1){
					verificador = true;
				}
			}else{
				if(coluna_inicial >= 0){
					verificador = true;
				}
			}
			if(verificador){
				var ret = this.preecherCoordenadas(linha_inicial,coluna_inicial);
				if(!ret){
					coluna_inicial = this._coordenadas_preenchidas[0][1] + 1;
					this.preecherCoordenadas(linha_inicial,coluna_inicial);
				}
			}
		}
	}

	moverBaixo(){
		if(!pecaColidiu(this)){
			var linha_inicial = this._coordenadas_preenchidas[0][0]-1;
			var coluna_inicial = this._coordenadas_preenchidas[0][1];
			var ret = this.preecherCoordenadas(linha_inicial,coluna_inicial);
			if(!ret){
				linha_inicial = this._coordenadas_preenchidas[0][0]+1;
				this.preecherCoordenadas(linha_inicial,coluna_inicial);
			}
		}
	}

	girar(){
		if(!pecaColidiu(this)){
			this._direcao ++;
			if(this._direcao > 4){
				this._direcao = 1;
			}
			var linha_inicial = this._coordenadas_preenchidas[0][0];
			var coluna_inicial = this._coordenadas_preenchidas[0][1];

			this.preecherCoordenadas(linha_inicial,coluna_inicial);
		}
	}
}