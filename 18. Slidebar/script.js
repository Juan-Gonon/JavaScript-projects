const toggle = document.getElementById('header-toggle');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__link');

toggle.addEventListener('click',()=>{
   
    if(toggle.classList.toggle('bx-x')){
        nav.classList.add('show-menu');
    }else{
        nav.classList.remove('show-menu');
    }
})

function addLink(){
    navLink.forEach((element)=>{
        element.classList.remove('active');
        this.classList.add('active');
    })
}

navLink.forEach((element)=>{
    element.addEventListener('click', addLink)
})