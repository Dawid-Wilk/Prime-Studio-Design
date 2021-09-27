// navbar-li

const links = document.querySelectorAll('.navbar-li');

links.forEach(link => {
    link.addEventListener('click', () =>{
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
    })
})