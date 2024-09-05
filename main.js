// core version + navigation, pagination modules:
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
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
  slidesPerView: 1,
  spaceBetween: 40,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".banner-button-next",
    prevEl: ".banner-button-prev",
  },
  initialSlide: 1, // 預設顯示的滑塊索引，0 代表第一個
});

// 火熱募資課程--Hailey

var swiper = new Swiper(".mySwiperHot", {
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// swiper (首頁)看看大家都買了什麼區塊--倫倫

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

// swiper (首頁)想學什麼嗎？一探究竟區塊--倫倫

const learnswiper = new Swiper(".learnswiper", {
  speed: 400,
  spaceBetween: 24,
  slidesPerView: 1,
});

//  jquery 結帳流程頁--倫倫

$("#bill").click(function () {
  $("#changeText").text($(this).html());
  $("#companyDetail").removeClass("d-block");
});

$("#company").click(function () {
  $("#changeText").text($(this).html());
  $("#companyDetail").addClass("d-block");
  $("#carrier-jq").removeClass("d-block");
});

$("#sendEmail").click(function () {
  $("#changeTextReceive").text($(this).html());
  $("#carrier-jq").removeClass("d-block");
});

$("#carrier").click(function () {
  $("#changeTextReceive").text($(this).html());
  $("#carrier-jq").addClass("d-block");
  $("#companyDetail").removeClass("d-block");
});

$("#citizenDigital").click(function () {
  $("#changeTextReceive").text($(this).html());
  $("#carrier-jq").removeClass("d-block");
});

// 帶入上一次結帳資料 結帳流程頁--倫倫

const lastCheckoutData = {
  name: "Jessica Wang",
  email: "jessicadesigner@gmail.com",
};

document
  .getElementById("fillLastCheckout")
  .addEventListener("click", function () {
    document.getElementById("name").value = lastCheckoutData.name;
    document.getElementById("email").value = lastCheckoutData.email;
  });

// 表單輸入後，顯示送出狀態按鈕 -- 倫倫
$(document).ready(function () {
  // 監聽表單內所有 input 的變化
  $("#testform .testInput").on("input", function () {
    // 檢查是否所有 input 都有值
    var allFilled = true;
    $("#testform .testInput").each(function () {
      if ($(this).val().length === 0) {
        allFilled = false;
        return false; // 有一個空的，停止檢查
      }
    });

    //所有 input 都有值時啟用按鈕並添加自定義 class，否則禁用按鈕並移除 class
    if (allFilled) {
      $("#testformBtn")
        .prop("disabled", false)
        .removeClass("btn-neutral-40 text-neutral-60")
        .addClass("btn-primary text-white");
    } else {
      $("#testformBtn")
        .prop("disabled", true)
        .removeClass("btn-primary text-white")
        .addClass("btn-neutral-40 text-neutral-60");
    }
  });

  $("#testform").on("submit", function (event) {
    event.preventDefault(); // 防止表單提交後刷新頁面`，讓 modal 能正常運作
    // 在這裡執行表單處理的邏輯，或使用 AJAX 提交
  });
});

// 頂尖講師 --蚊香
var teacherswiper = new Swiper(".teacherswiper", {
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// 課程列表 --蚊香
var courselistswiper = new Swiper(".course-list-swiper", {
  slidesPerView: "auto",
  spaceBetween: 8,
  navigation: {
    nextEl: ".button-next",
  },

  breakpoints: {
    768: {
      slidesPerView: 10,
    },
  },
});


var popularswiper = new Swiper(".popular-swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".popular-swiper-button-right",
    prevEl: ".popular-swiper-button-left",
  },
});

var popularswiper = new Swiper(".popular-swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".popular-swiper-button-right",
    prevEl: ".popular-swiper-button-left",
  },
});

var popularswiper = new Swiper(".popular-swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".popular-swiper-button-right",
    prevEl: ".popular-swiper-button-left",
  },
});

//登入JS
const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");
const loginPasswordInput = document.getElementById("loginPassword");
const loginpasswordIcon = document.getElementById("login-password-icon");

loginForm.addEventListener("input", function () {
  if (loginForm.checkValidity()) {
    loginBtn.disabled = false; // 如果表單有效，啟用按鈕
    loginBtn.style.backgroundColor = "#0068FF";
    loginBtn.style.color = "#ffffff";
  } else {
    loginBtn.disabled = true; // 如果表單無效，禁用按鈕
    loginBtn.style.backgroundColor = "#ECECEC";
    loginBtn.style.color = "#909090";
  }
});

loginPasswordInput.addEventListener("input", function () {
  if (loginPasswordInput.value.length > 0) {
    loginpasswordIcon.src = "/assets/images/icons/ic_eye_close.png";
  } else {
    loginpasswordIcon.src = "/assets/images/icons/ic_eye-open.png";
  }
});
loginPasswordInput.addEventListener('input', function () {

loginPasswordInput.addEventListener("input", function () {
  if (loginPasswordInput.value.length > 0) {
    loginpasswordIcon.src = '/assets/images/icons/ic_eye_close.png';
    loginpasswordIcon.src = "/assets/images/icons/ic_eye_close.png";
  } else {
    loginpasswordIcon.src = '/assets/images/icons/ic_eye-open.png';
    loginpasswordIcon.src = "/assets/images/icons/ic_eye-open.png";
  }
});