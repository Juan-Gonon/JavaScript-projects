const card = document.querySelector('.cards');
const cardImg = document.querySelectorAll('.card__img');
const cardBg = document.querySelectorAll('.card__bg');

let range = 40;
let timeout;


function calc(a,b){

    return (a/b * range-range/2).toFixed(1);
}



window.addEventListener('mousemove', (e)=>{
    // console.log(e)

    const {x, y} = e;

    if(timeout){
        window.cancelAnimationFrame(timeout)
    }
    

    timeout = window.requestAnimationFrame(()=>{
        const {clientHeight, clientWidth} = document.documentElement;

        const xValue = calc(x, clientWidth);
        const yValue = calc(y, clientHeight);

        // console.log(xValue)
        // console.log(yValue)

        card.style = `transform: rotateY(${xValue}deg) rotateX(${yValue}deg);`;

        cardImg.forEach((element)=>{
           element.style = `transform: translateX(${-xValue}px) translateY(${-yValue}px);`
        })

        cardBg.forEach((element)=>{
            element.style.backgroundPosition = `${xValue*.45}px ${yValue*.45}px`;
        })


    }, false)

})


