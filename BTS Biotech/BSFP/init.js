/*
    Auteur : Joël Dendaletche

	Initialisations de la page chargeDesProteines.html
*/



function init() {
	var debug = document.getElementById("debug");
	debug.innerHTML = ""; //"debug ON<br/>";
	
	tabInput = document.getElementsByTagName("INPUT");
	var i;
	var n = tabInput.length;
	
	for (i=0 ; i < n; i++){
		//bool = tabInput[i].checked;
		//debug.innerHTML += "bool de l'input " + i + " est égal à " + bool + " <br/>";
		if (tabInput[i].checked) {      
			tabInput[i].checked = false;
		} // décoche toutes les cases des input de type checkbox
	}
	//document.body.style.color = "pink";
}



