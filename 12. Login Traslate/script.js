const singUp = document.getElementById('sing-up-btn');
const singIn = document.getElementById('sing-in-btn');

const container = document.querySelector('.container');



singUp.addEventListener('click', ()=>{

    container.classList.add('sign-up-mode');

})

singIn.addEventListener('click', ()=>{
    container.classList.remove('sign-up-mode');
})