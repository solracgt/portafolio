const menu = document.querySelector(".nav__menu");
const openMenuBtn = document.querySelector(".open__menu");
const closeMenuBtn = document.querySelector(".close__menu");

function toggleMenu() {
  menu.classList.toggle("menu__opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

/* ------------------- Gestión de pantalla completa ------------------- */

/*var Promise = Element.requestFullscreen(options); */
document.getElementById("Entrar").addEventListener("click", function(e){
  getFullscreen(document.documentElement);
},false);

/*var exitPromise = document.exitFullscreen(); */
document.getElementById("Salir").addEventListener("click", function(e){
  exitFullscreen();
},false);

function getFullscreen(element){
  if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
}

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}


/* Comment 

const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click", () => {
	navMenu.classList.toggle("nav__menu-visible");

	if (navMenu.classList.contains("nav__menu-visible")) {
		navToggle.setAttribute("aria-label", "Cerrar menú") ;
	} else {
		navToggle.setAttribute("aria-label", "Abrir menú") ;
	}
});

*/

/*
jQuery('document').ready(function($) {
	var menuBtn = $('.menubtn'),
	    menu = $('.cab-nav ul');
	menuBtn.click(function(){
		if (menu.hasClass('show')) {
			menu.removeClass('show');
		} else {
			menu.addClass('show');	
		}
	})
});


jQuery('document').ready(function($) {
	var menuBtn = $('.cab-menu-icon'),
	    menu = $('.cab-cnt-nav ul');
	menuBtn.click(function(){
		if (menu.hasClass('show')) {
			menu.removeClass('show');
		} else {
			menu.addClass('show');	
		}
	})
});

*/


/*
function cierraMenu() {
	alert("Si entra");

	menu.removeClass('show');
}

*/

/*
var cerrarMenu = document.querySelector(".cab-cnt-nav");
cerrarMenu.addEventListener("click", function(event) {
	event.preventDefault();
	menu.removeClass('show');
});
*/

