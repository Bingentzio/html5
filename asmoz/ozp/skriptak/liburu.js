	function Liburu(izenburu, egile, salneurri){

		Produktu.apply(this, [izenburu, egile, salneurri]);

		var _unekoOrrialdea = 0;
		
		this.bistaratu = function(){
			console.log("Liburuaren izenburua:" + this.izenburu);
		}

		this.markadorea = function(orrialde){
			_unekoOrrialdea = orrialde;
			this.lortuOrrialdea();
		}
		this.hurrengoOrrialderaJoan = function(){
			_unekoOrrialdea++;
		}
		this.lortuOrrialdea = function(){
			console.log("Orrialde honetan nago:" + _unekoOrrialdea);
		}
	}
	Liburu.prototype = new Produktu();
	Liburu.prototype.constructor = Liburu;


