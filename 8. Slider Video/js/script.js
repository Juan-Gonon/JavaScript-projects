const menuIcon = document.querySelector('.menuIcon');
const navBar = document.querySelector('.navBar');

const controls = document.querySelector('.controls')
const slideShowText = document.getElementById('slideShowText')

//videos
const slideshow = document.getElementById('slideshow')
const videos = slideshow.getElementsByTagName('video')
const dibs = slideShowText.getElementsByTagName('div')

//variables

console.log(dibs)




let indice = 0;
let j = 0;

controls.lastElementChild.onclick = ()=>{
    videos[indice].classList.remove('active');

    indice = (indice+1)%videos.length;
    videos[indice].classList.add('active')
    //console.log(indice)
    nexText()
}

controls.firstElementChild.onclick = ()=>{
    videos[indice].classList.remove('active');
    //console.log('antes '+ indice)
    indice = (indice-1 + videos.length)%videos.length;
    //console.log('después'+indice)
    videos[indice].classList.add('active');
    prevText();

}

function prevText(){
    dibs[j].classList.remove('active');
    j = (j-1 + dibs.length)%dibs.length;
    dibs[j].classList.add('active');
}

function nexText(){
    dibs[j].classList.remove('active');
    j = (j+1)%dibs.length;
    dibs[j].classList.add('active')
}






// Array.from(videos).forEach((i)=>{
//     console.log(i)
// })



// })


menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('active')
    navBar.classList.toggle('active')
}