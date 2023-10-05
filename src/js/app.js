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

//Мобільне меню
let Menu = document.querySelectorAll(".burger_menu");
const List = document.querySelector(".header_list");
Menu.forEach(function(item){
    item.addEventListener("click",function(){
        List.classList.toggle('active');
    });
});
//Акордеон (тестовий)
// const reviewsBtn = document.querySelectorAll(".continue");
// const hidden = document.querySelectorAll(".hidden");
// reviewsBtn.forEach(function(item){
//     item.addEventListener("click",function(){
//         let currentBtn = item;
//         let TabId = currentBtn.getAttribute("data-tab");
//         let currentTab = document.querySelector(TabId);
//         if( ! currentTab.classList.contains('active')){
//             reviewsBtn.forEach(function(item){
//                 item.classList.remove("active");
//             });
//             hidden.forEach(function(item){
//                 item.classList.remove("no-hidden");
//             });
// 			currentBtn.classList.add("active");
// 			currentTab.classList.add("no-hidden");
// 			currentBtn.addEventListener("click",function(){
// 				if(	currentBtn.classList.contains('active')){
// 					currentBtn.classList.remove("active");
// 					currentTab.classList.remove("no-hidden");
// 				}else{
// 					currentBtn.classList.add("active");
// 					currentTab.classList.add("no-hidden");
// 				}
// 			});
//         };
//     });
// } );
const reviewsBtn = document.querySelectorAll(".continue");
const hidden = document.querySelectorAll(".hidden");
reviewsBtn.forEach(function(item){
    item.addEventListener("click",function(){
		let cur = item.getAttribute("data-tab").split('_')[1] //порядковий номер кнопки/тексту
		for(var i = 1; i <= reviewsBtn.length; i++){
			const curBtn = reviewsBtn[i-1];
			const curTab = hidden[i-1];
			if( i == cur){
				if(	curBtn.classList.contains('active')){
					curBtn.classList.remove("active");
					curTab.classList.remove("no-hidden");
				}else{
					curBtn.classList.add("active");
					curTab.classList.add("no-hidden");
				};
			}else{
				if( curBtn.classList.contains('active')){
					curBtn.classList.remove("active");
					curTab.classList.remove("no-hidden");
				}
			}
		}
    });
} );
