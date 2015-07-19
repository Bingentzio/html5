	var Produktu = function Produktu(izenburu, egile, salneurri) { 
		this.izenburua = izenburu;
		this.egilea = egile;
		this.salneurria = salneurri; 
	}

	Produktu.prototype.bistaratu = function() {
		return "Produktuaren izena:" + this.izenburua;
	}

