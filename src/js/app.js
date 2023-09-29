import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper('.swiper',{
//     grabCursor: true,
//     slidesPerView: 1,
//     slidesPerView: "auto",
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       type: "progressbar",
//       clickable: true,
//     },
//   });


			const swiper = new Swiper('.visitors_swiper',{
				grabCursor: true,
				slidesPerView: 1,
				navigation: {
					nextEl: ".next",
					prevEl: ".prev",
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
					},
				breakpoints: {
					320: {
						pagination: {
						el: ".swiper-scrollbar",
						clickable: true,
						type: "progressbar",
					},
					},
					1000: {
						pagination: {
						el: ".swiper-pagination",
						clickable: true,
						// dynamicBullets: true,
					},
					},
				},
			});

//Мобільне меню
let Menu = document.querySelectorAll(".burger_menu");
const List = document.querySelector(".header_list");
Menu.forEach(function(item){
    item.addEventListener("click",function(){
        List.classList.toggle('active');
    });
});