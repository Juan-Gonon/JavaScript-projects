const toggle = document.querySelector('.toggle');
const navegation = document.querySelector('.navegation')

console.log(navegation)


toggle.onclick = ()=>{
    toggle.classList.toggle('active')
    navegation.classList.toggle('active')
}