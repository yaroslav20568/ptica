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