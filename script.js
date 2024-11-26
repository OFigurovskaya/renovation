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


sliderBig.addEventListener('mousedown', slide, false);


sliderBig.addEventListener('mouseup', () => {
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

function updateSlider() {
    for(let i = 0; i <= slideIndex; i++) {
        if((i ===  slideIndex - 1 || i ===  slideIndex  || i ===  slideIndex + 1)) {
            slides[i].style.display = 'block';
        } else {
            slides[i].style.display = 'none';
        }
    }
}

//slider three photo end