// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.header__nav-list');
const bodyEl = document.querySelector('body');
let navItemAll = document.querySelectorAll('.header__nav-item');


const toggleMenu = function() {
	menu.classList.toggle('open');	
}
const toggleBurger = function() {
	btnMenu.classList.toggle('active');
}
const toggleMenuLine = function() {
	menuLine1.classList.toggle('active');
	menuLine2.classList.toggle('active');
	menuLine3.classList.toggle('active');
}
const bodyOverflow = function() {
	bodyEl.classList.toggle('hidden');
}
btnMenu.addEventListener('click', function(e) {
	e.stopPropagation();
	toggleMenu();		
	toggleBurger();
	bodyOverflow();
	toggleMenuLine();
});	
 navItemAll.forEach((el) => {		
	el.addEventListener("click", function () {
		if (menu.classList.contains("open")) {			
			toggleMenu();
			toggleBurger();
			bodyOverflow();
		}				
	});	
})

const menuLine1 = document.querySelector('.top-bun');
const menuLine2 = document.querySelector('.meat');
const menuLine3 = document.querySelector('.bottom-bun');
