//button close
const close = document.querySelector('.calculation__close');

close.addEventListener('click', () => {
    const calculation = document.querySelector('.calculation');
    calculation.style.display = 'none'
})
//button close end

//slider one photo
const sliderBig = document.querySelector('.slider-wrapperB');
const slider = document.querySelector('.sliderB');
let toggle = false;
sliderBig.addEventListener('touchmove', slide, false);
function slide() {
    slider.style.visibility = toggle ? 'hidden' : 'visible';
}

sliderBig.addEventListener('touchend', () => {
    toggle = !toggle;
})
//slider one photo end

//slider three photo
const sliderThree = document.querySelector('.prices__slider');
const prew = document.querySelector('.prices__slider-prew');
const next = document.querySelector('.prices__slider-next');
const slides = Array.from(sliderThree.querySelectorAll('.slide'));
let slideIndex = 0;
const slideCount = slides.length;


prew.addEventListener('click', prewSlide)
next.addEventListener('click', nextSlide)

function prewSlide() {
    slideIndex = (slideIndex - 1 + slideCount ) % slideCount;
    updateSlider();
}

function nextSlide() {
    slideIndex = (slideIndex + 1 + slideCount ) % slideCount;
    updateSlider();
}

// Функция для обновления отображения слайдера
// function updateSlider() {
//     slides.forEach((slide, index) => {
// console.log(slides[slideIndex]);
//       if (index === slideIndex ) {
//         slide.style.display = 'block';
//       } else {
//         slide.style.display = 'none';
//       }
//     });
//   }

function updateSlider() {
    for(let i = 0; i <= slideIndex; i++) {
        console.log(i);
        if(i ===  slideIndex || i ===  slideIndex + 1 || i ===  slideIndex - 1) {
            slides[i].style.display = 'block';
        } else {
            slides[i].style.display = 'none';
        }
    }
}