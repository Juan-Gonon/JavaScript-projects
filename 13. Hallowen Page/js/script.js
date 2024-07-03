/** Menu */

const toggle = document.getElementById('nav-toggle'),
menu = document.getElementById('nav-menu'),
closeMenu = document.getElementById('nav-close');
const link = document.querySelectorAll('.nav__list a');
const sectionID = document.querySelectorAll('section[id]');




if(toggle){
    toggle.addEventListener('click', ()=>{
        menu.classList.add('show-menu');
    })
}
if(closeMenu){
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('show-menu');
    })
}

//cerrar nav

link.forEach((i)=>{
    i.addEventListener('click', ()=>{
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu')
    })
})

//Scroll Up

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')    

    if(this.scrollY >= 460){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll')
    }
}

function scrollActive(){
    const {scrollTop} = document.documentElement;

    sectionID.forEach((i)=>{
        const sectionHeight = i.offsetHeight;
        const sectionTop = i.offsetTop -56;
        const sectionId = i.getAttribute('id');

        if(scrollTop > sectionTop && scrollTop <= sectionTop+sectionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId+ ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*='+sectionId+ ']').classList.remove('active-link');
        }


    })
}

window.addEventListener('scroll', scrollActive)
window.addEventListener('scroll', scrollUp)


// Swiper

let homeSwiper = new Swiper('.home-swiper', {
    spaceBetween:30,
    loop: true,
    pagination:{
        el : '.swiper-pagination',
        clickable: true
    }
})


let newSwiper = new Swiper('.new-swiper', {
    centeredSlides: true,
    spaceBetween: 16,
    slidesPerView : 'auto',
    loop: true,
})


/** Scroll Reveal */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})


sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`, {interval: 100});
sr.reveal(`.about__data, .discount__img`, {origin: 'left'});
sr.reveal(`.about__img, .discount__data`, {origin: 'right'});