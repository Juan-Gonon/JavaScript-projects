const toggle = document.querySelector('.menuToggle');
const navegation = document.querySelector('.navegation');
const img = document.querySelector('.imgArea img')

console.log(img)

toggle.onclick = ()=>{
    toggle.classList.toggle('active');
    navegation.classList.toggle('active')
}


function imgSlider(dir){
    img.src = dir;
}