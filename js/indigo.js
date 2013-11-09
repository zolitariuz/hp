/****************************************
 Proyecto:             HP Indigo
 Autores:              Raúl Z y Miguel C
 Cliente:              Litobel 
 Última actualización: 31/10/2013
*****************************************/

$( document ).ready(function() {
	// GENERAL
	//jsResponsivo();
	//ajustarAlturaMenu();
	prevenirSalto();
	
	// SEGMENTOS
	var menuIzq = document.getElementById("menu_segmentos");
	if ( menuIzq != null ) {
		muestraInfo("aplicaciones"); // mostrar por default pestaña "aplicaciones en los segmentos"
		menuIzq.addEventListener("click", cambiaTab, false); // detecta que opción del menú izquierdo fue "clickeada" y cambia la info
	}
	
	// HISTORIAS DE EXITO 
	var menuCasos = $(".panel-historias");
	if(menuCasos[0] != null) {
		muestraInfoCasos("caso");
		menuCasos[0].addEventListener("click", cambiaTabCasos, false);
	}
	
	// PRENSAS 
	var menuPrensas = $(".panel-prensas ul");
	if(menuPrensas[0] != null) {
		muestraInfoPrensas("prensa");
		menuPrensas[0].addEventListener("click", cambiaTabPrensas, false);
	}

});


/**********************
	****** FUNCIONES ******
	***********************/
	function prevenirSalto() {
	// 	Prevenir salto al inicio de la página al dar click en <a href="#">
		$("a").click(function(e) {
			if(($(this).attr("href")) == "#") 
				e.preventDefault();		
		});	
	} // prevenirSalto
	function resetInfo() {
	// Esconde la info y le quita el estado de activo al menu
		var ap = document.getElementById("aplicaciones");
		if ( ap != null ){
			ap.style.display = "none";
			var apLink = document.getElementById("aplicacionesLink");
			apLink.className = "";
		}
		var so = document.getElementById("soluciones");
		if ( so != null ){
			so.style.display = "none";
			var soLink = document.getElementById("solucionesLink");
			soLink.className = "";
		}
		var te = document.getElementById("tendencias");
		if ( te != null ){
			te.style.display = "none";
			teLink = document.getElementById("tendenciasLink");
			teLink.className = "";
		}
		var vi = document.getElementById("videos");
		if ( vi != null ){
			vi.style.display = "none";
			viLink = document.getElementById("videosLink");
			viLink.className = "";
		}
	} // resetInfo
	function muestraInfo(id){
	// resetea la info y muestra la pestaña correspondiente al ID
		resetInfo();
		e = document.getElementById(id);
		l = document.getElementById(id + "Link");
		if ( e != null ){
			e.style.display = "block";
		}
		if ( l != null ){
			l.className = "activo";
		}
	} // muestraInfo
	function cambiaTab(e){
	// activa y muestra la info de la opcion seleccionada
		var id = e.target.id;
		id = id.replace("Link", "");
		muestraInfo(id);
	} // cambiaTab
	
	function muestraInfoCasos(id) {
		resetInfoCasos();	
		$(".panel-historias ul li a#" + id).addClass("activo"); 
		if (id == "caso") 
			$(".contenido-caso").css("display", "block");
		else if (id == "video")
			$(".contenido-video").css("display", "block");
	} // muestraInfoCasos
	function resetInfoCasos() {
		$(".panel-historias ul li a").removeClass("activo"); 	
		$(".contenido-caso").css("display", "none");
		$(".contenido-video").css("display", "none");
	} // resetInfoCasos
	function cambiaTabCasos(e){
	// activa y muestra la info de la opcion seleccionada
		var id = e.target.id;
		muestraInfoCasos(id);
	} // cambiaTabCasos
	
	function muestraInfoPrensas(id) {
		if(id != "descargar") {
			resetInfoPrensas();	
			$(".panel-prensas ul li a#" + id).addClass("activo"); 
			if (id == "prensa") 
				$(".contenido-slider").css("display", "block");
			else if (id == "beneficios")
				$(".contenido-beneficios").css("display", "block");
			else if (id == "datos")
				$(".contenido-datos").css("display", "block");
		}
	} // muestraInfoPrensas
	function resetInfoPrensas() {
		$(".panel-prensas ul li a").removeClass("activo"); 	
		$(".contenido-slider").css("display", "none");
		$(".contenido-beneficios").css("display", "none");
		$(".contenido-datos").css("display", "none");
	} // resetInfoPrensas
	function cambiaTabPrensas(e){
		var id = e.target.id;
		muestraInfoPrensas(id);
	} // cambiaTabCasos
	
	function slider() {
		$(".slider .control-slider a").click(function(){
			var id = $(this).attr("id");
			id = id.replace("control-", "");
			limpiaControl();
			$(this).addClass("activo");
			limpiaImg();
			$(".slider img#" + id).addClass("activo");
		});
		$(".slider .flecha-der").click(function() {
			var activo = $(".slider img.activo").attr("id");
			limpiaImg();
			limpiaControl();
			activo = parseInt(activo) + 1;
			if(activo > 4) activo = 1;
			$(".slider img#" + activo).addClass("activo");
			$(".slider .control-slider a#control-" + activo).addClass("activo");
		});
		$(".slider .flecha-izq").click(function() {
			var activo = $(".slider img.activo").attr("id");
			limpiaImg();
			limpiaControl();
			activo = parseInt(activo) - 1;
			if(activo < 1) activo = 4;
			$(".slider img#" + activo).addClass("activo");
			$(".slider .control-slider a#control-" + activo).addClass("activo");
		});
		
		function limpiaControl() {
			$(".slider .control-slider a").removeClass("activo");
		}
		function limpiaImg() {
			$(".slider img").removeClass("activo");
		}	
	}
	
	
	function jsResponsivo() {
	// definir funciones especificas para diferentes tamaños de pantalla usando jRespond
	
		var jRes = jRespond([
			{ 
				label: 'movil', 
				enter: 0, 
				exit: 481
			}
		]);
		
		// funciones específicas para cada breakpoint
		jRes.addFunc({
			breakpoint: 'movil',
			enter: function() {
				
			},
			exit: function() {
				
			}
		});
		
		
	}
