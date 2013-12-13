/****************************************
 Proyecto:             HP Indigo
 Autores:              Raúl Z y Miguel C
 Cliente:              Litobel
 Última actualización: 12/13/2013
*****************************************/

$( document ).ready(function() {
	// GENERAL
	//jsResponsivo();
	//ajustarAlturaMenu();
	prevenirSalto();

	// SEGMENTOS
	var menuIzq = document.getElementById("menu_segmentos");
	if ( menuIzq != null ) {
		muestraInfo("tendencias"); // mostrar por default pestaña "aplicaciones en los segmentos"
		menuIzq.addEventListener("click", cambiaTab, false); // detecta que opción del menú izquierdo fue "clickeada" y cambia la info
	}

	// HISTORIAS DE EXITO
	var menuCasos = $(".panel-historias ul");
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

	// var timeOut = 3000;
	// window.setInterval(function(){
	// 	timeOut -=1000

	// 	if ( timeOut == -1000 ){
	// 		timeOut = 3000;
	// 	}

	// 	if ( timeOut == 0 ){
	// 		$('.lightbox-container').show();
	// 		console.log('es igual a 0');
	// 	}

	// }, 1000);

	// $('.container').on('click', function(){
	// 	timeOut = 3000;
	// });

	// $('.lightbox-container').on('click', function(){
	// 	$(this).hide();
	// 	timeOut = 3000;
	// });

	jQuery('#videos').fitVids();

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
		if(id != "pdf")  {
			resetInfoCasos();
			$(".panel-historias ul li a#" + id).addClass("activo");
		}
		if (id == "caso")
			$(".contenido-caso").css("display", "block");
		else if (id == "video")
			$(".contenido-video").css("display", "block");
		else if (id == "fotos")
			$(".contenido-fotos").css("display", "block");
	} // muestraInfoCasos
	function resetInfoCasos() {
		$(".panel-historias ul li a").removeClass("activo");
		$(".contenido-caso").css("display", "none");
		$(".contenido-video").css("display", "none");
		$(".contenido-fotos").css("display", "none");
	} // resetInfoCasos
	function cambiaTabCasos(e){
	// activa y muestra la info de la opcion seleccionada
		var id = e.target.id;
		muestraInfoCasos(id);
	} // cambiaTabCasos

	function muestraInfoPrensas(id) {
		if(id != "descargar" && id != "video") {
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
		var numImg = $(".slider .control-slider li").length;
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
			if(activo > numImg) activo = 1;
			$(".slider img#" + activo).addClass("activo");
			$(".slider .control-slider a#control-" + activo).addClass("activo");
		});
		$(".slider .flecha-izq").click(function() {
			var activo = $(".slider img.activo").attr("id");
			limpiaImg();
			limpiaControl();
			activo = parseInt(activo) - 1;
			if(activo < 1) activo = numImg;
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

	function lightboxVid() {
	    $(".seccion-segmento ul li a").click(function () {
	        esconderVid();
	        var id = $(this).attr("class");
	        $(".lightbox-container video." + id).addClass("activo");
	        $(".lightbox-container").css("display", "block");
	        if (id == "eilat") {
	            $(".lightbox-container h2").text("Eilat");
	        } else if (id == "conference") {
	            $(".lightbox-container h2").text("Conference");
	        } else if (id == "death-sea") {
	            $(".lightbox-container h2").text("The Death Sea");
	        } else if (id == "green-tourism") {
	            $(".lightbox-container h2").text("Green Tourism");
	        } else if (id == "zumba") {
	            $(".lightbox-container h2").text("Green Tourism");
	        } else if (id == "medical-tourism") {
	            $(".lightbox-container h2").text("Medical Tourism in Israel");
	        } else if (id == "land") {
	            $(".lightbox-container h2").text("A Land of Everlasting Promise");
	        } else if (id == "intimate-journey") {
	            $(".lightbox-container h2").text("An Intimate Journey to the Holy Land");
	        } else if (id == "spirit") {
	            $(".lightbox-container h2").text("Spirit of Israel");
	        }
	        $(".lightbox-media a").click(function () {
	            var vid = $(".lightbox-container video." + id);
	            vid[0].pause();
	            $(".lightbox-container").css("display", "none");
	        });
	    });
	}

	function esconderVid() {
	    $(".lightbox-container video").removeClass("activo");
	}

	function lightboxIFrame() {
	    $(".botones-prensa li a#video").click(function () {

	        $(".lightbox-container").css("display", "block");

	        $(".lightbox-media a").click(function () {
	            $(".lightbox-container").css("display", "none");
	        });

	        $('body').animate(
	    		{ scrollTop:0 }, '500'
	    	);
	    });
	}
