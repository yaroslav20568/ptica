import { animations } from './functions/animations.js';

document.addEventListener('DOMContentLoaded', () => {
	/* HEADER */
	const burger = document.querySelector('.header__burger');
	const burgerMenu = document.querySelector('.header-burger__nav');

	burger.addEventListener('click', () => {
		if(!burger.classList.contains('active')) {
			burger.classList.add('active');
			burgerMenu.classList.add('active');
			burgerMenu.style.maxHeight = `${burgerMenu.scrollHeight}px`;
		} else {
			burger.classList.remove('active');
			burgerMenu.classList.remove('active');
			burgerMenu.style.maxHeight = null;
		}
	});

	const addArrowLink = (linkClass) => {
		const headerFirstLinks = document.querySelectorAll(linkClass);

		headerFirstLinks.forEach(link => {
			if(link.nextElementSibling) {
				link.classList.add('have-children');
			}
		});
	};

	addArrowLink('.header-nav__link');
	addArrowLink('.header-burger-nav__link');
	/* HEADER */
});

  var swiper = new Swiper(".mySwiper", {
	// slidesPerView: 5,
	// slidesPerGroup: 5,
	spaceBetween: 20,
	autoplay: true,
	speed: 1000,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},

	breakpoints: {
		1200: {
			slidesPerView: 5,
			slidesPerGroup: 5,
		},

		992: {
			slidesPerView: 4,
			slidesPerGroup: 4,
		},

		768: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},

		420: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		
		280: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		}
	}
});