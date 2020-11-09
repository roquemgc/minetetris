class Peca{

	constructor(tipo){
		if(tipo >= 1 && tipo <= 7){
			this._tipo = tipo;
		}else{
			throw "Tipo inválido de peça";
		}
	}

	get tipo(){
		var t = "";
		switch(this._tipo){
			case 1:
				t = "i";
				break;
			case 2:
				t = "quadrado 2x2";
				break;
			case 3:
				t = "L";
				break;
			case 4:
				t = "L invertido";
				break;
			case 5:
				t = "triangulo";
				break;
			case 6:
				t = "barco";
				break;
			case 7:
				t = "quadrado 1x1";
				break;
		}
		return t;
	}

	static isPecaObj(obj){
		var ret = false;
		if(typeof obj==='object' && obj!==null && obj.constructor.name === 'Peca'){
			ret = true;
		}
		return ret;
	}

}