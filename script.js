// navbar-li

const links = document.querySelectorAll('.navbar-li');

links.forEach(link => {
    link.addEventListener('click', () =>{
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
    })
})

// slider

const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
let currentSlide = 1;

//manual slider 
const manualSlider = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

    btns.forEach((btn) => {
        btn.classList.remove('active');
        })
    })

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualSlider(i);
        currentSlide = i;
    })
})