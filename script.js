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
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualSlider(i);
        currentSlide = i;
    });
});

//automat slider
let repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

let repeater = () => {
    setTimeout(function() {
        [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
        });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

    if(slides.length == i){
        i = 0;
    }
    if(i >= slides.length){
        return;
    }
    repeater();
    }, 4000);
}

repeater();
}
repeat();