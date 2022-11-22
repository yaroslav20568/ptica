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


/* CONTACTS-TABS */
const electronicAppealsTabsBtnsContainer = document.querySelector('.electronic-appeals__tabs-btns');
const electronicAppealsTabsBtns = document.querySelectorAll('.electronic-appeals__tabs-btn');

const showForm = (indexForm) => {
  const forms = document.querySelectorAll('.electronic-appeals__tabs-form');

  forms.forEach((form, index) => {
    form.classList.remove('active');
    
    if(indexForm === index) {
      form.classList.add('active');
    }
  });
}

electronicAppealsTabsBtnsContainer.addEventListener('click', (e) => {
  if(e.target.tagName === 'BUTTON') {
    electronicAppealsTabsBtns.forEach((electronicAppealsTabsBtn, index) => {
      electronicAppealsTabsBtn.classList.remove('active');

      if(e.target === electronicAppealsTabsBtn) {
        showForm(index);
      }
    });

    e.target.classList.add('active');
  }
});
/* CONTACTS-TABS */



/* CONTACT FORM */
const submitBtns = document.querySelectorAll('.electronic-appeals__form-submit');

submitBtns.forEach((submitBtn) => {
  submitBtn.addEventListener ('click', (e) => {
    e.preventDefault();

    /**/
    validationForm();
    /**/

    
  });
});
/* CONTACT FORM */

/* CONTACT FORM VALIDATION */
const validationForm = () => {
  const requiredFields = document.querySelectorAll('.electronic-appeals__tabs-form.active .required-field');
  const allFields = document.querySelectorAll('.electronic-appeals__tabs-form.active input[type="text"], .electronic-appeals__tabs-form.active textarea, .electronic-appeals__tabs-form.active input[type="file"], .electronic-appeals__tabs-form.active input[type="checkbox"]');
  // console.log(allFields);
  let arrayCount = [];

  requiredFields.forEach(requiredField => {
    if(requiredField.type === 'text' && requiredField.value) {
      arrayCount = [...arrayCount, requiredField.name];
    } else if(requiredField.type === 'checkbox' && requiredField.checked) {
      arrayCount = [...arrayCount, requiredField.name];
    }
  });

  if(requiredFields.length === arrayCount.length) {
    submitForm();
    resetInputs(allFields);
  } else {
    showAlert('Не все обязательные поля заполнены', 'red');
  }
}

const submitForm = () => {
  const activeForm = document.querySelector('.electronic-appeals__tabs-form.active');
  const formData = new FormData(activeForm);
  console.log(formData)
  
  formData.delete('file');
  formData.delete('agree');

  const fileInput = document.querySelector('.electronic-appeals__tabs-form.active .electronic-appeals__form-file input');
  formData.append('file', fileInput.files[0]);

  // const formAlert = document.querySelector('.form-alert');
  // const formAlertText = document.querySelector('.form-alert__text');

  fetch('assets/phpMail.php', {
    method: 'POST',
    body: formData
  }).then(resp => {
    if(resp.status === 200) {
      showAlert('Данные успешно отправлены', '#01372A');
    } else {
      showAlert('Ошибка отправки', 'red');
    }
    // showAlert('Данные успешно отправлены', '#01372A');
  })
  .catch(() => {
    showAlert('Ошибка отправки', 'red');
  })
}

const resetInputs = (requiredFields) => {
  requiredFields.forEach(requiredField => {
    if(requiredField.type === 'text' && requiredField.value) {
      requiredField.value = '';
    } else if(requiredField.type === 'checkbox' && requiredField.checked) {
      requiredField.checked = false;
    } else if(requiredField.type === 'textarea' && requiredField.value) {
      requiredField.value = '';
    } else if(requiredField.type === 'file' && requiredField.value) {
			requiredField.nextElementSibling.textContent = 'Файл не выбран';
		}
  });
}

const showAlert = (text, backgroundColor) => {
  const formAlert = document.querySelector('.form-alert');
  const formAlertText = document.querySelector('.form-alert__text');

  formAlert.classList.add('active');
  formAlert.style.backgroundColor = backgroundColor;
  formAlertText.textContent = text;

  setTimeout(() => {
    formAlert.classList.remove('active');
  }, 2000);
}
/* CONTACT FORM VALIDATION */

const fileInputs = document.querySelectorAll('.electronic-appeals__tabs-form input[type="file"]');

fileInputs.forEach(fileInput => {
	fileInput.addEventListener('change', (e) => {
		fileInput.nextElementSibling.textContent = 'Выбран файл:' + fileInput.files[0].name;
	});
});