var Disko = function Disko(izenburu, egile, salneurri, formatu) {
		Produktu.apply(this, [izenburu, egile, salneurri]);
		this.formatu = function() {
			console.log("Diskoaren formatua:" + formatu);
		};
	};

Disko.prototype = new Produktu();
Disko.prototype.constructor = Disko;



