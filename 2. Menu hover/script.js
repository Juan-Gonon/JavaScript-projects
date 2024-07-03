const toggle = document.querySelector('.menuToggle');
const navegation = document.querySelector('.navegation');
const list = document.querySelectorAll('.list');

// console.log(list)


toggle.onclick = ()=>{
    navegation.classList.toggle('open');
    // console.log(navegation)
}

function listas(){
    list.forEach((i)=> i.classList.remove('active'))
    this.classList.add('active')
}

list.forEach((i)=> i.addEventListener('click', listas))
