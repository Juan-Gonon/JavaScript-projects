const img = document.querySelectorAll('.thum li');
const nike = document.querySelector('.imgBx img')


//console.log(nike)
img.forEach((i)=>{
  
    i.onmouseover = ()=>{

        const imgThem = i.querySelector('img')
        //console.log(imgThem)
        nike.src = imgThem.src;
        //nike.src = i.src;

    }
})