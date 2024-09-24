const sliderContainer = document.querySelector('.slider-container');
const items = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const itemsPerSlide = 3;
const totalItems = items.length;
const totalSlides = Math.ceil(totalItems / itemsPerSlide);

function updateSlider() {
    const translateX = -(currentIndex * 100);
    sliderContainer.style.transform = `translateX(${translateX}%)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateSlider();
});

updateSlider();
