	function Produktu(izenburu, egile, salneurri) { 
		this.izenburua = izenburu;
		this.egilea = egile;
		this.salneurria = salneurri; 
	}

	Produktu.prototype.bistaratu = function() {
		console.log("Produktuaren izena:" + this.izena);
	}

