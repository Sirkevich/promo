const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'standart':'Standart',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'premium':'Premium',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'gold':'Gold',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'standart':'Базовый',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'premium':'Премиальный',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'gold':'Золотой',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}
// export default i18Obj;





const hamburger = document.querySelector('.hamburger');
const navListBurgerOpen = document.querySelector('.nav-list');
const links = document.querySelector('.nav-list');

function toggleMenu() {
  hamburger.classList.toggle('open');
  navListBurgerOpen.classList.toggle('nav-burger-open');
}

function closeMenu() {
    hamburger.classList.remove('open');
    navListBurgerOpen.classList.remove('nav-burger-open');
  }

hamburger.addEventListener('click', toggleMenu);
links.addEventListener('click',closeMenu);

// console.log('блок header -- 6 балов \nблок hero -- 6 балов \nблок skills -- 6 балов \nблок portfolio -- 6 балов \nблок video -- 6 балов \nблок price -- 6 балов \nблок contacts -- 6 балов \nблок footer -- 6 балов \n\nнет полосы прокрутки при ширине страницы от 1440рх до 768рх -- 5 балов \nнет полосы прокрутки при ширине страницы от 768рх до 480рх -- 5 балов \nнет полосы прокрутки при ширине страницы от 480рх до 320рх -- 5 балов \n\nпри ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка -- 2 бала \nпри нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик -- 4 бала \nпвысота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана -- 4 бала \nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку -- 4 бала \nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку -- 4 бала \nбургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений -- 2 бала \nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям -- 2 бала \nпри клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку -- 4бала');











// -----------------------change images-----------------------


const portfolioImages = document.querySelectorAll('.portfolio-img');

const portfolioBtns = document.querySelector('.portfolio-buttons-container');


function changeImage(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    { 
       if (event.target.classList.contains('winter')){
        portfolioImages.forEach((img, index) => img.src = `./assets/img/Winter/${index + 1}.jpg`);
    } else if (event.target.classList.contains('spring')){
      portfolioImages.forEach((img, index) => img.src = `./assets/img/Spring/${index + 1}.jpg`);
    } else if (event.target.classList.contains('summer')){
      portfolioImages.forEach((img, index) => img.src = `./assets/img/Summer/${index + 1}.jpg`);
    } else if (event.target.classList.contains('autumn')){
      portfolioImages.forEach((img, index) => img.src = `./assets/img/Autumn/${index + 1}.jpg`);
    }
      
    }
  }
}
portfolioBtns.addEventListener("click", changeImage);
  


// // -----------------------active buttons -----------------------




document.querySelectorAll('.portfolio-btn').forEach(element => {
  element.addEventListener('click', item => {
    document.querySelectorAll('.portfolio-btn').forEach(element => element.classList.remove('portfolio-btn-active'));
    item.target.classList.add('portfolio-btn-active');
  })
})



// -------------------translate page---------------------

// const ru = document.querySelector('.main-btn')

// const tTranslate = document.querySelectorAll('[data-i18]');

// function getTranslate () {
  
//   tTranslate.forEach((element) => {
//     // if (element.contains(['data-i18'])) {
//     //   console.log(dataset.i18);
//     // }
//     console.log(element.dataset.i18)
//   });
//   console.log(true)
// };

// ru.addEventListener ('click', getTranslate)







const langArr = document.querySelectorAll("[data-i18]");
const enLang = document.querySelector('.lang-en');
const ruLang = document.querySelector('.lang-ru');

function translateRussian(lang) {
  lang = 'ru';
  langArr.forEach((e) => {
    e.textContent = i18Obj[lang][e.dataset.i18];
  })
}

function translateEnglish(lang) {
  lang = 'en';
  langArr.forEach((e) => {
    e.textContent = i18Obj[lang][e.dataset.i18];
  })
}
// enLang.addEventListener('click', translate('en'));
ruLang.addEventListener('click', translateRussian);
enLang.addEventListener('click', translateEnglish);





// --------------------change theme------------------- 

let btnDark = document.querySelector('.theme-btn-dark');

function changeLogo () {
  if (btnDark.classList.contains('theme-btn-dark')) {
    btnDark.classList.remove('theme-btn-dark');
    btnDark.classList.add('theme-btn-light');
  } else {
    btnDark.classList.remove('theme-btn-light');
    btnDark.classList.add('theme-btn-dark');
  }
}

btnDark.addEventListener('click', changeLogo);

let arr = ['skills', 'portfolio', 'video', 'price'];

let changeThemeBtn = document.querySelector('.theme-btn-dark');

changeThemeBtn.addEventListener('click', changeTheme);

function changeTheme () {
  
  arr.forEach(element => {
    let item = document.querySelector(`.${element}`);
    if (item.classList.contains('light-theme')) {
     return item.classList.toggle('light-theme'), 
     document.documentElement.style.setProperty('--body-color', '#000'),
     document.documentElement.style.setProperty('--section-title-color', '#bdae82'),
     document.documentElement.style.setProperty('--section-after', '#bdae82'),
     document.documentElement.style.setProperty('--btn-text-color', '#bdae82'),
     document.documentElement.style.setProperty('--btn-text-color-active', '#000'),
     document.documentElement.style.setProperty('--color-burger', '#000'),
     document.documentElement.style.setProperty('--link-color', '#fff'),
     document.documentElement.style.setProperty('--hamburger-color', '#fff');
      
    } else {
     return item.classList.add('light-theme'), 
     document.documentElement.style.setProperty('--body-color', '#fff'),
     document.documentElement.style.setProperty('--section-title-color', '#000'),
     document.documentElement.style.setProperty('--section-after', '#000'),
     document.documentElement.style.setProperty('--btn-text-color', '#000'),
     document.documentElement.style.setProperty('--btn-text-color-active', '#fff'),
     document.documentElement.style.setProperty('--color-burger', '#fff'),
     document.documentElement.style.setProperty('--link-color', '#000'),
     document.documentElement.style.setProperty('--hamburger-color', '#000');
    }
  });
}

//  let btnlang = document.querySelector('.lang-ru');

// function changeLang (obj) {

//   for (let key in i18Obj) {
//   //  for (let prop in i18Obj[key]) {
//   //      console.log(i18Obj[prop])
//   //  }
//     console.log(key)
// }
//   // if (btnDark.classList.contains('theme-btn-dark')) {
//   //   btnDark.classList.remove('theme-btn-dark');
//   //   btnDark.classList.add('theme-btn-light');
//   // } else {
//   //   btnDark.classList.remove('theme-btn-light');
//   //   btnDark.classList.add('theme-btn-dark');
//   // }

// }

