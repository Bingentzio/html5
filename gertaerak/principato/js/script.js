function kudeatzaileakHasieratu()
{
	var irudia = document.getElementById("irudia");
	irudia.onclick = function()
	{
		console.log("Irudian sakatu duzu");
	}

        var erabiltzaile = document.getElementById("erabiltzaile");
	erabiltzaile.value = 'zure@emaila';

	erabiltzaile.onblur = function(){
		if (erabiltzaile.value == ''){
			erabiltzaile.value = "zure@emaila";
		}
	};

	erabiltzaile.onfocus = function(){
		if (erabiltzaile.value == 'zure@emaila'){
			erabiltzaile.value = '';
		}
	};

	var zerrenda = document.getElementById("combobox");
	zerrenda.addEventListener("change",zerrendaKudeatzaile);

	function zerrendaKudeatzaile(){
		console.log(zerrenda.value);
		console.log(zerrenda.options[item.selectedIndex].text);
		console.log(zerrenda.selectedIndex);
	} 

	var inprimakia = document.getElementById('inprimakia');
	inprimakia.onsubmit = function(){
		console.log("submit botoian sakatu duzu");
		 // eremuen balioak egiaztatu. Baten bat bete gabe badago 
            	// false bueltatu. Bestela, true bueltatu.
		return false;
	};

}

window.onload = kudeatzaileakHasieratu;

