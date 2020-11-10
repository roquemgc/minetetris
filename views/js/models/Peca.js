class Peca{

	constructor(tipo){
		if(tipo >= 1 && tipo <= 7){
			this._tipo = tipo;
		}else{
			throw "Tipo inválido de peça";
		}
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

	static isPecaObj(obj){
		var ret = false;
		if(typeof obj==='object' && obj!==null && obj.constructor.name === 'Peca'){
			ret = true;
		}
		return ret;
	}

}