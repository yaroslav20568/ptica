const languageItems = [
	{language: 'азербайджанский', code: 'az'},
	{language: 'албанский', code: 'sq'},
	{language: 'амхарский', code: 'am'},
	{language: 'английский', code: 'en'},
	{language: 'арабский', code: 'ar'},

	{language: 'армянский', code: 'hy'},
	{language: 'африкаанс', code: 'af'},
	{language: 'баскский', code: 'eu'},
	{language: 'башкирский', code: 'ba'},
	{language: 'белорусский', code: 'be'},

	{language: 'бенгальский', code: 'bn'},
	{language: 'бирманский', code: 'my'},
	{language: 'болгарский', code: 'bg'},
	{language: 'боснийский', code: 'bs'},
	{language: 'валлийский', code: 'cy'},
	{language: 'венгерский', code: 'hu'},

	{language: 'вьетнамский', code: 'vi'},
	{language: 'гаитянский (креольский)', code: 'ht'},
	{language: 'галисийский', code: 'gl'},
	{language: 'голландский', code: 'nl'},

	{language: 'горномарийский', code: 'mrj'},
	{language: 'греческий', code: 'el'},
	{language: 'грузинский', code: 'ka'},
	{language: 'гуджарати', code: 'gu'},
	{language: 'датский', code: 'da'},
	{language: 'иврит', code: 'he'},

	{language: 'идиш', code: 'yi'},
	{language: 'индонезийский', code: 'id'},
	{language: 'ирландский', code: 'ga'},
	{language: 'итальянский', code: 'it'},
	{language: 'исландский', code: 'is'},
	{language: 'испанский', code: 'es'},
	{language: 'казахский', code: 'kk'},

	{language: 'каннада', code: 'kn'},
	{language: 'каталанский', code: 'ca'},
	{language: 'киргизский', code: 'ky'},
	{language: 'китайский', code: 'zh'},
	{language: 'корейский', code: 'ko'},
	{language: 'коса', code: 'xh'},
	{language: 'кхмерский', code: 'km'},
	{language: 'лаосский', code: 'lo'},
	{language: 'латынь', code: 'la'},

	{language: 'латышский', code: 'lv'},
	{language: 'литовский', code: 'lt'},
	{language: 'люксембургский', code: 'lb'},
	{language: 'малагасийский', code: 'mg'},
	{language: 'малайский', code: 'ms'},

	{language: 'малаялам', code: 'ml'},
	{language: 'мальтийский', code: 'mt'},
	{language: 'македонский', code: 'mk'},
	{language: 'маори', code: 'mi'},
	{language: 'маратхи', code: 'mr'},
	{language: 'марийский', code: 'mhr'},
	{language: 'монгольский', code: 'mn'},
	{language: 'немецкий', code: 'de'},
	{language: 'непальский', code: 'ne'},

	{language: 'норвежский', code: 'no'},
	{language: 'панджаби', code: 'pa'},
	{language: 'папьяменто', code: 'pap'},
	{language: 'персидский', code: 'fa'},
	{language: 'польский', code: 'pl'},
	{language: 'португальский', code: 'pt'},
	{language: 'румынский', code: 'ro'},
	{language: 'русский', code: 'ru'},
	{language: 'себуанский', code: 'ceb'},
	{language: 'сербский', code: 'sr'},

	{language: 'сингальский', code: 'si'},
	{language: 'словацкий', code: 'sk'},
	{language: 'словенский', code: 'sl'},
	{language: 'суахили', code: 'sw'},
	{language: 'сунданский', code: 'su'},
	{language: 'таджикский', code: 'tg'},
	{language: 'тайский', code: 'th'},
	{language: 'тагальский', code: 'tl'},
	{language: 'тамильский', code: 'ta'},
	{language: 'татарский', code: 'tt'},

	{language: 'телугу', code: 'te'},
	{language: 'турецкий', code: 'tr'},
	{language: 'удмуртский', code: 'udm'},
	{language: 'узбекский', code: 'uz'},
	{language: 'украинский', code: 'uk'},
	{language: 'урду', code: 'ur'},
	{language: 'финский', code: 'fi'},
	{language: 'французский', code: 'fr'},
	{language: 'хинди', code: 'hi'},
	{language: 'хорватский', code: 'hr'},

	{language: 'чешский', code: 'cs'},
	{language: 'шведский', code: 'sv'},
	{language: 'шотландский', code: 'gd'},
	{language: 'эстонский', code: 'et'},
	{language: 'эсперанто', code: 'eo'},
	{language: 'яванский', code: 'jv'},
	{language: 'японский', code: 'ja'}
];

languageItems.forEach((languageItem) => {
	document.querySelector('.header-widget__language-items').innerHTML += `
		<a class="header-widget__language-item" data-ya-lang="${languageItem.code}">
		${languageItem.language}
		</a>
	`;
});

const languageBtn = document.querySelector('.header-widget__language');
const languageList = document.querySelector('.header-widget__language-list');

languageBtn.addEventListener('click', () => {
	if(languageBtn.classList.contains('active')) {
		languageBtn.classList.remove('active');
		languageList.style.display = 'none';
	} else {
		languageBtn.classList.add('active');
		languageList.style.display = 'block';
	}
});

if(JSON.parse(localStorage.getItem('yt-widget'))) {
	const currentLanguage = JSON.parse(localStorage.getItem('yt-widget')).lang;
	const activeLanguageIndex = languageItems.findIndex(languageItem => languageItem.code === currentLanguage);

	const languageElemItems = document.querySelectorAll('.header-widget__language-item');
	languageElemItems[activeLanguageIndex].style.fontWeight = 600;
}




const yatranslate = {
	/* Original language */
	lang: "ru",
	/* The language we translate into on the first visit */
	/* Язык, на который переводим при первом посещении */
	// langFirstVisit: 'en',
};

document.addEventListener('DOMContentLoaded', function () {
	// Start
	yaTranslateInit();
})

function yaTranslateInit() {

	if (yatranslate.langFirstVisit && !localStorage.getItem('yt-widget')) {
			/* Если установлен язык перевода для первого посещения и в localStorage нет yt-widget */
			/* If the translation language is installed for the first visit and in localStorage no yt-widget */
			yaTranslateSetLang(yatranslate.langFirstVisit);
	}

	// Подключаем виджет yandex translate
	// Connecting the yandex translate widget
	let script = document.createElement('script');
	script.src = `https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=${yatranslate.lang}&widgetTheme=light&autoMode=false`;
	document.getElementsByTagName('head')[0].appendChild(script);

	// Получаем и записываем язык на который переводим
	// We get and write down the language into which we translate
	let code = yaTranslateGetCode();

	// Показываем текущий язык в меню
	// Show the current language in the menu
	yaTranslateHtmlHandler(code);

	// Вешаем событие клик на флаги
	// We hang the event click on the flags
	yaTranslateEventHandler('click', '[data-ya-lang]', function (el) {
			yaTranslateSetLang(el.getAttribute('data-ya-lang'));
			// Перезагружаем страницу
			// Reloading the page
			window.location.reload();
	})
}

function yaTranslateSetLang(lang) {
	// Записываем выбранный язык в localStorage объект yt-widget 
	// Writing the selected language to localStorage 
	localStorage.setItem('yt-widget', JSON.stringify({
			"lang": lang,
			"active": true
	}));
}

function yaTranslateGetCode() {
	// Возвращаем язык на который переводим
	// Returning the language to which we are translating
	return (localStorage["yt-widget"] != undefined && JSON.parse(localStorage["yt-widget"]).lang != undefined) ? JSON.parse(localStorage["yt-widget"]).lang : yatranslate.lang;
}

function yaTranslateHtmlHandler(code) {
	// Получаем язык на который переводим и производим необходимые манипуляции с DOM
	// We get the language to which we translate and produce the necessary manipulations with DOM 
	document.querySelector('[data-lang-active]').innerHTML = `${code.toUpperCase()}`;
	// document.querySelector(`[data-ya-lang="${code}"]`).remove();
}

function yaTranslateEventHandler(event, selector, handler) {
	document.addEventListener(event, function (e) {
			let el = e.target.closest(selector);
			if (el) handler(el);
	});
}