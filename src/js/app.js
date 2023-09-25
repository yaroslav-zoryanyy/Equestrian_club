import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper('.swiper',{
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

//Мобільне меню
let Menu = document.querySelectorAll(".burger_menu");
const List = document.querySelector(".header_list");
Menu.forEach(function(item){
    item.addEventListener("click",function(){
        List.classList.toggle('active');
    });
});