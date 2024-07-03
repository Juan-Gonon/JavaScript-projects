const body = document.querySelector('body')
const toggle = document.querySelector('#toggle');

toggle.onclick = ()=>{
    body.classList.toggle('active');
    toggle.classList.toggle('active');
}