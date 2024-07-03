const conteiner = document.querySelector('.conteiner');
const toggle = document.querySelector('.toggleBtn');

toggle.onclick = ()=>{
    conteiner.classList.toggle('active')
    console.log(conteiner)
}