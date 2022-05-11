// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.header__nav');
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


// Sticky header
const header = document.querySelector('.header');
const first = document.querySelector('.first');
const headerHeight = header.offsetHeight;
const firstHeight = first.offsetHeight;
let lastScrollTop = 0;

let contactsHeader = document.querySelector('.header__contacts');
let contactsTel = document.querySelector('.header__contacts-tel');
let contactsSocials = document.querySelector('.header .socials__list');
let headerLogo = document.querySelector('.header .logo');





function contactsTelRemove() {
	contactsTel.classList.add('d-none-imp');
	contactsSocials.classList.add('d-none-imp');
	contactsHeader.style.marginBottom = '0';
	btnMenu.style.marginTop = '0';
}
function contactsTelAdd() {
	contactsTel.classList.remove('d-none-imp');
	contactsSocials.classList.remove('d-none-imp');
	contactsHeader.style.marginBottom = '36px';
	btnMenu.style.marginTop = '37px';
}
function logoWidthSmall() {
	headerLogo.style.width = "78px";
}
function logoWidthLg() {
	headerLogo.style.width = "auto";
}

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance > lastScrollTop) {
		header.classList.remove('header--fixed');
		first.style.marginTop = null;
		contactsTelRemove();
		logoWidthSmall();
	
	} else {
		header.classList.add('header--fixed');
		first.style.marginTop = `${headerHeight}px`;
	}

	if (scrollDistance === 0) {
		header.classList.remove('header--fixed');
		first.style.marginTop = null;
		contactsTelAdd();
		logoWidthLg();
	}
	lastScrollTop = scrollDistance;
});