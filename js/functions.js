(function(){ 
	// variables
	var menuIzq = document.getElementById("menu_segmentos");

	// mostrar por default pestaña "aplicaciones"
	muestraInfo("aplicaciones");

	// detecta que opción del menú izquierdo fue "clickeada" y cambia la info
	menuIzq.addEventListener("click", cambiaTab, false);

}()); // Immediately-Invoked Function Expression (IIFE)

function resetInfo() {
// Esconde la info y le quita el estado de activo al menu
	var ap = document.getElementById("aplicaciones");
	ap.style.display = "none";
	var apLink = document.getElementById("aplicacionesLink");
	apLink.className = "";

	var so = document.getElementById("soluciones");
	so.style.display = "none";
	var soLink = document.getElementById("solucionesLink");
	soLink.className = "";

	var te = document.getElementById("tendencias");
	te.style.display = "none";
	teLink = document.getElementById("tendenciasLink");
	teLink.className = "";

	var vi = document.getElementById("videos");
	vi.style.display = "none";
	viLink = document.getElementById("videosLink");
	viLink.className = "";
}

function muestraInfo(id){
// resetea la info y muestra la pestaña correspondiente al ID
	resetInfo();
	e = document.getElementById(id);
	l = document.getElementById(id + "Link");
	e.style.display = "block";
	l.className = "activo";
}

function cambiaTab(e){
// activa y muestra la info de la opcion seleccionada
	var id = e.target.id;
	id = id.replace("Link", "");
	muestraInfo(id);
}