const counters = document.querySelectorAll('.counter');


console.log(counters)



counters.forEach((i)=>{
    i.innerText = "0";

    const data = +i.getAttribute('data-target');
    const rest = data /100;

    let followers = ()=>{
        const text = +i.innerText;

        if(text < data){
            i.innerText = Math.ceil(text + rest)
            setTimeout(()=>{
                followers();
            }, 20)
        }
    }

    followers();

})

