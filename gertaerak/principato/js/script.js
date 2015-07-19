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

	var item = document.getElementById("combobox");
	item.addEventListener("change",zerrendaKudeatzaile);

	function zerrendaKudeatzaile(){
		console.log(item.value);
		console.log(item.selectedIndex);
		console.log(item.options[item.selectedIndex].text);
	} 

	var inprimakia = document.getElementById('inprimakia');
	inprimakia.onsubmit = function(){
		console.log("submit botoia sakatu duzu");
            // eremuen balioak egiaztatu. Baten bat bete gabe badago 
            // false bueltatu. Bestela, true bueltatu.
		return false;
	}

}

window.onload = kudeatzaileakHasieratu;

