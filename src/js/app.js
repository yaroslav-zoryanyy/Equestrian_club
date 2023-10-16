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
// Картинка у новому вікні
var cards = document.querySelectorAll('.visitors_slide-wrapper');
cards.forEach((card) => {
	let img = card.querySelector('.visitors-slide--img')
	let span = card.querySelector('.test')
	
	span.addEventListener('click', () => {
		window.open(img.getAttribute('src'), '_top ');
	})
})