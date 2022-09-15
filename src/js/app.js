import { animations } from './functions/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  /* HEADER */
  const burger = document.querySelector('.header__burger');
  const burgerMenu = document.querySelector('.header-burger__nav');

  burger.addEventListener('click', () => {
    if(!burger.classList.contains('active')) {
      burger.classList.add('active');
      burgerMenu.classList.add('active');
      // burgerMenu.style.maxHeight = ${burgerMenu.scrollHeight}px;
      burgerMenu.style.display = 'block';
    } else {
      burger.classList.remove('active');
      burgerMenu.classList.remove('active');
      burgerMenu.style.display = 'none';
      // burgerMenu.style.maxHeight = null;
    }
  });

  const activeDropdownElements =  document.querySelectorAll('.header-burger__nav a.active');
  // console.log(activeDropdownElements);
  if(activeDropdownElements.length === 1) {
    if(activeDropdownElements[0]?.parentElement && activeDropdownElements[0]?.parentElement.nextElementSibling && activeDropdownElements[0]?.parentElement.nextElementSibling?.classList[0] === 'header-burger-nav__menu') {
      const burgerLiItems = [...activeDropdownElements[0].parentElement.nextElementSibling?.children];

      activeDropdownElements[0].nextElementSibling.style.transform = 'rotate(180deg)';
      activeDropdownElements[0].parentElement.nextElementSibling.style.display = 'block';

      burgerLiItems.forEach(burgerLiItem => {
        burgerLiItem.firstElementChild.style.color = '#828282';
      })
    }
  } else {
    if(activeDropdownElements[0]?.parentElement && activeDropdownElements[0]?.parentElement.nextElementSibling) {
      activeDropdownElements[0].nextElementSibling.style.transform = 'rotate(180deg)';
      activeDropdownElements[0].parentElement.nextElementSibling.style.display = 'block';
    }
  }

  const addArrowLink = (linkClass) => {
    const headerFirstLinks = document.querySelectorAll(linkClass);

    headerFirstLinks.forEach(link => {
	  if(link.nextElementSibling && linkClass === '.header-nav__link') {
		link.classList.add('have-children');
	  }

      if(link.parentElement.nextElementSibling?.tagName !== 'UL' && linkClass === '.header-burger-nav__link') {
        if(link.nextElementSibling) {
          link.nextElementSibling.style.display = 'none';
          // console.log(link.nextElementSibling);
        }
      }
    });
  };

  addArrowLink('.header-nav__link');
  addArrowLink('.header-burger-nav__link');

  const arrowBtns = document.querySelectorAll('.header-burger-nav__top img');
  arrowBtns.forEach(arrowBtn => {
    arrowBtn.addEventListener('click', () => {
      if(arrowBtn.parentElement.nextElementSibling.style.display !== 'block') {
        arrowBtn.parentElement.nextElementSibling.style.display = 'block';
        arrowBtn.style.transform = 'rotate(180deg)';
      } else {
        arrowBtn.parentElement.nextElementSibling.style.display = 'none';
        arrowBtn.style.transform = 'rotate(0deg)';
      }
    });
  });
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