const cardContainer = document.querySelector(".cards");
const cardContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");


const applyOverlayMask = (e)=>{
    // const overlayEl = e.currentTarget;
    let {currentTarget, pageX, pageY} = e;

    const x = pageX - cardContainer.offsetLeft;
    const y = pageY - cardContainer.offsetTop;

    // console.log(currentTarget)

    currentTarget.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`

}

const createOverlayCta =  (overlayCard, ctaEl)=>{
    const overlayCta = document.createElement('div');
    overlayCta.classList.add("cta");

    overlayCta.textContent = ctaEl.textContent;


    overlayCard.append(overlayCta)

}

const initOverlayCard = (cardEl)=>{
    const overlayCard = document.createElement('div');
    overlayCard.classList.add('card');

    createOverlayCta(overlayCard, cardEl.lastElementChild);

    overlay.append(overlayCard);
    observer.observe(cardEl)
}


const observer = new ResizeObserver((entries)=>{
    // console.log(entries)
    entries.forEach((entry)=>{
        const cardIndex = cards.indexOf(entry.target);
        let width = entry.borderBoxSize[0].inlineSize;
        let height = entry.borderBoxSize[0].blockSize;

        if(cardIndex >= 0){
            overlay.children[cardIndex].style.width = `${width}px`;
            overlay.children[cardIndex].style.height = `${height}px`
        }
    })
})

cards.forEach(initOverlayCard)



document.body.addEventListener("pointermove", applyOverlayMask)
