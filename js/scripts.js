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

function cierraMenu() {
	alert("Si entra");

	menu.removeClass('show');
}

/*
var cerrarMenu = document.querySelector(".cab-cnt-nav");
cerrarMenu.addEventListener("click", function(event) {
	event.preventDefault();
	menu.removeClass('show');
});
*/
