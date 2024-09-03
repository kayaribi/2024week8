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
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".banner-button-next",
    prevEl: ".banner-button-prev",
  },
  initialSlide: 1, // 預設顯示的滑塊索引，0 代表第一個
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

//登入JS
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const loginPasswordInput = document.getElementById('loginPassword');
const loginpasswordIcon = document.getElementById('login-password-icon');

loginForm.addEventListener('input', function() {
    if (loginForm.checkValidity()) {
        loginBtn.disabled = false; // 如果表單有效，啟用按鈕
        loginBtn.style.backgroundColor = '#0068FF';  
        loginBtn.style.color = '#ffffff';  
    } else {
        loginBtn.disabled = true;  // 如果表單無效，禁用按鈕
        loginBtn.style.backgroundColor = '#ECECEC'; 
        loginBtn.style.color = '#909090';
    }
});
loginPasswordInput.addEventListener('input', function() {
  if (loginPasswordInput.value.length > 0) {
      loginpasswordIcon.src = '/assets/images/icons/ic_eye_close.png';
  } else {
      loginpasswordIcon.src = '/assets/images/icons/ic_eye-open.png';
  }
});
