// core version + navigation, pagination modules:
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
//banner swiper


var swiper = new Swiper(".bannerSwiper", {
  modules: [Navigation, Pagination],
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".banner-button-next",
    prevEl: ".banner-button-prev",
  },
});




// 看看大家都買了什麼--倫倫

// init Swiper:
const everyoneBuyswiper = new Swiper(".everyoneBuyswiper", {
  modules: [Navigation, Pagination],
  speed: 400,
  spaceBetween: 24,
  slidesPerView: 1,

  breakpoints: {
    576: {
      //當螢幕寬度大於等於576
      slidesPerView: 2,
    },
    992: {
      //當螢幕寬度大於等於992
      slidesPerView: 3,
    },
    1200: {
      //當螢幕寬度大於等於1200
      slidesPerView: 4,
    },
  },

  navigation: {
    nextEl: ".everyoneBuy-button-next",
    prevEl: ".everyoneBuy-button-prev",
  },
});

// 想學什麼嗎？一探究竟--倫倫

const learnswiper = new Swiper(".learnswiper", {
  speed: 400,
  spaceBetween: 24,
  slidesPerView: 1,
});

// 頂尖講師 --蚊香
var teacherswiper = new Swiper(".teacherswiper", {
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
  },
});