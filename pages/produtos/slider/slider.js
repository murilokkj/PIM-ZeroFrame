const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');



let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    slider[currentSlide].classList.add('on');
}

btnNext.addEventListener('click', function () {
    console.log('Indo ao próximo slide');
    hideSlider();
    if (currentSlide == slider.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider();

})

btnPrev.addEventListener('click', function () {
    console.log('Voltando ao slide anterior');
    hideSlider();
    if (currentSlide == 0) {
        currentSlide = slider.length - 1;
    } else {
        currentSlide--;
    }
    showSlider();

    
})