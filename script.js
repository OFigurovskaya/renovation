//button close
const close = document.querySelector('.calculation__close');

close.addEventListener('click', () => {
    const calculation = document.querySelector('.calculation');
    calculation.style.display = 'none'
})

const sliderBig = document.querySelector('.slider-wrapper');
const slider = document.querySelector('.slider');
let toggle = false;
sliderBig.addEventListener('touchmove', slide, false);
function slide()  {
    slider.style.visibility =  toggle ? 'hidden' : 'visible';

    console.log(slider);
} 

sliderBig.addEventListener('touchend', () => {
    toggle = !toggle;
})





// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.wrapper',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });