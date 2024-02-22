// import header from './modules/header.js';
// header();

document.querySelector(".icon").addEventListener("click", function () {
  this.classList.toggle("icon--active");
});

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,
  slidesPerView: 2.3,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// JavaScript
var mySwiper = new Swiper('.swiper-container', {
  // настройки Swiper...
});

// Добавьте обработчик изменения размера окна
window.addEventListener('resize', function () {
  if (window.innerWidth <= 768) {
    mySwiper.params.slidesPerView = 1; // Настройте количество видимых слайдов для маленьких экранов
  } else {
    mySwiper.params.slidesPerView = 3; // Возвращаем к количеству слайдов для больших экранов
  }
  
  // Переинициализируем Swiper
  mySwiper.update();
});
