import * as flsFunctions from "./modules/functions.js";
import './components.js';



flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel]);

// Инициализация слайдера repair
const repairSlider = document.querySelector('.repair-slider');
let mySwiperMemory = new Swiper(repairSlider, { 	
  slidesPerView: 1,	
  spaceBetween: 0, 	
  loop: true,  
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
	},
	navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  }
});

// Инициализация слайдера complects
const complectsSlider = document.querySelector('.complects__slider');
let mySwiperComplects = new Swiper(complectsSlider, { 	
  slidesPerView: 4,	
  spaceBetween: 20, 	
  loop: true,  
	breakpoints: {  
		0: {
			slidesPerView: 1,	
			centeredSlides: true,
		},  
		576: {
			slidesPerView: 2,	
			centeredSlides: true,
		},  
		768: {
			slidesPerView: 3,
			centeredSlides: true,	
		},     
		992: {	
			slidesPerView: 3,	
			centeredSlides: true,	
		},
		1200: {	
			slidesPerView: 4,	
		},
		1500: {		
			slidesPerView: 4,	
		}
	}
});

// Инициализация слайдера finance
const financeSlider = document.querySelector('.finance-slider');
let mySwiperFinance = new Swiper(financeSlider, { 	
  slidesPerView: 1,	
  spaceBetween: 0, 	 
	loop: true,  
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
	},
	navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  }, 
	breakpoints: {  
		0: {
			slidesPerView: 1,	
			centeredSlides: true,
		},  
		576: {
			slidesPerView: 1,	
			centeredSlides: true,
		},  
		768: {
			slidesPerView: 1,
			centeredSlides: true,	
		},     
		992: {	
			slidesPerView: 1,	
			
		},
	}
});

// Инициализация слайдера video
const videoSlider = document.querySelector('.video-slider');
let mySwiperVideo = new Swiper(videoSlider, { 	
  slidesPerView: 1,	
  spaceBetween: 0, 	 
	loop: true,  
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
	},
	navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  }, 
	breakpoints: {  
		0: {
			slidesPerView: 1,	
			centeredSlides: true,
		},  
		576: {
			slidesPerView: 1,	
			centeredSlides: true,
		},  
		768: {
			slidesPerView: 1,
			centeredSlides: true,	
		},     
		992: {	
			slidesPerView: 1,	
			
		},
	}
});

// Инициализация слайдера outhsort
const outsourcingSlider = document.querySelector('.outsourcing-slider');
let mySwiperOutsourcing = new Swiper(outsourcingSlider, { 	
  slidesPerView: 1,	
  spaceBetween: 0, 	 
	loop: true,  
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
	},
	navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  }, 
	breakpoints: {  
		0: {
			slidesPerView: 1,	
			centeredSlides: true,
		},  
		576: {
			slidesPerView: 1,	
			centeredSlides: true,
		},  
		768: {
			slidesPerView: 1,
			centeredSlides: true,	
		},     
		992: {	
			slidesPerView: 1,	
			
		},
	}
});

// Инициализация слайдера creation
const creationSlider = document.querySelector('.creation-slider');
let mySwiperCreation = new Swiper(creationSlider, { 	
  slidesPerView: 1,	
  spaceBetween: 0, 	 
	loop: true,  
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
	},
	navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  }, 
	breakpoints: {  
		0: {
			slidesPerView: 1,	
			centeredSlides: true,
		},  
		576: {
			slidesPerView: 1,	
			centeredSlides: true,
		},  
		768: {
			slidesPerView: 1,
			centeredSlides: true,	
		},     
		992: {	
			slidesPerView: 1,	
			
		},
	}
});

// Инициализация слайдера awards
const awardsSlider = document.querySelector('.awards-slider');
let mySwiperAwards = new Swiper(awardsSlider, { 	
  slidesPerView: 4,	
  spaceBetween: 20, 	
  loop: false,  
	breakpoints: {  
		0: {
			centeredSlides: false,
			slidesPerView: 1,	
		},  	
		576: {
			slidesPerView: 2,	
			centeredSlides: true,
		},  
		768: {
			slidesPerView: 2,		
		},     
		992: {	
			slidesPerView: 3,				
		},
		1200: {	
			slidesPerView: 4,	
		},
		1500: {		
			slidesPerView: 4,			
		}
	}
});

// Инициализация слайдера partners
const partnersSlider = document.querySelector('.partners-slider');
let mySwiperPartners = new Swiper(partnersSlider, { 	
  slidesPerView: 6,	
  spaceBetween: 20, 	
  loop: false,  
	breakpoints: {  
		0: {
			slidesPerView: 2,	
			centeredSlides: true,
		},  
		576: {
			slidesPerView: 3,	
			centeredSlides: true,
		},  
		768: {
			slidesPerView: 4,
			// centeredSlides: true,	
		},     
		992: {	
			slidesPerView: 5,	
			
		},
		1200: {	
			slidesPerView: 6,	
		},
		1500: {		
			slidesPerView: 6,	
		}
	}
});





lightGallery(document.getElementById('lightgallery'), {
	plugins: [lgThumbnail],
	speed: 500,
});
