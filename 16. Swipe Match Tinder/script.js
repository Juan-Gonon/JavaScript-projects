let isAnimating = false;
let pullDeltaX = 0;
const decision = 75;


function starDrag(event){
    if(isAnimating) return;

    const actualCard = event.target.closest('article');

    if(!actualCard) return

    const starX = event.pageX ?? event.touches[0].pageX; //touchstart es evento.touches[0].pageX, tauches porque podemos hacer vario pero con el [0] para que capture el primero

    //escuchar cuando el mouse o touch se esta moviendo y cuando termine
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd)

    //Lo mismo para el touch
    document.addEventListener('touchmove', onMove, {passive: true});
    document.addEventListener('touchend', onEnd, {passive:true});




    console.log(event);
    console.log(starX);

    function onMove(event){
        const currentX = event.pageX ?? event.touches[0].pageX;
        pullDeltaX = currentX - starX;
    
        console.log(currentX)
        //distancia entre el posición inicial o donde esta ahorita
    
        console.log(pullDeltaX)
      

        if(pullDeltaX === 0) return;

        isAnimating = true;
        
        const deg = pullDeltaX / 14;

        actualCard.style.transform = `translateX(${pullDeltaX}px) rotate(${deg}deg)`;
        actualCard.style.cursor = 'grabbing';

        const opacity = Math.abs(pullDeltaX) /100;
        const isRight = pullDeltaX >0;
        const choiceEl = isRight 
        ? actualCard.querySelector('.choice.like')
        : actualCard.querySelector('.choice.nope');

        choiceEl.style.opacity = opacity;


    }

    function onEnd(event){

        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onEnd)
    
        //Lo mismo para el touch
        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('touchend', onEnd);

        // isAnimating = false;

        // pullDeltaX = 0;
        // actualCard.style.transform = 'none';
        // actualCard.cursor = 'grab'

         const decisionMade = Math.abs(pullDeltaX) >= decision;

         if(decisionMade){
            const goRight = pullDeltaX >= 0;
            const goLeft = !goRight;

            actualCard.classList.add(goRight ? 'go-right' : 'go-left');
            actualCard.addEventListener('transitionend', ()=>{
                actualCard.remove()
            }, {once: true})

         }else{
            actualCard.classList.add('reset');
            actualCard.classList.remove('go-right', 'go-left');
            actualCard.querySelectorAll('.choice').forEach((i)=>{
                i.style.opacity = 0;
            })
         }

         //reset de variables
         actualCard.addEventListener('transitionend', ()=>{
            actualCard.removeAttribute('style');
            actualCard.classList.remove('reset');
            pullDeltaX=0;
            isAnimating = false;
         })

    
    }
    


}



document.addEventListener('mousedown', starDrag);
document.addEventListener('touchstart', starDrag, {passive: true})