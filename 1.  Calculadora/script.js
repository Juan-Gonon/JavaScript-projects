const display = document.querySelector('#display');
const btns = document.querySelectorAll('button');
const calculator = document.querySelector('.calculator')
const themeToggler = document.querySelector('.theme-toggler');

// console.log(themeToggler)

let isDark = true;


// console.log(btns)

btns.forEach((i)=>{
    // console.log(i)

    i.onclick = ()=>{
        if(i.id == 'clear'){
            display.innerText = "";
        }else if(i.id == 'backspace'){
            let string = display.innerText.toString();
            // console.log(string)
            // console.log(string.substr(0, string.length - 1 ))
            display.innerText = string.substr(0, string.length -1);
        }else if(display.innerText != ''  && i.id == 'equal'){
            display.innerText = eval(display.innerText)
        }else if(display.innerText == '' && i.id == 'equal'){
            display.innerText = 'NULL';
            setTimeout(()=>(display.innerText = ""), 2000)
        }else{
            display.innerText += i.id;
        }
    }
})

// console.log(isDark)

themeToggler.onclick = ()=>{
    calculator.classList.toggle('dark');
    themeToggler.classList.toggle('active');
    isDark = !isDark;
    // console.log(isDark)
}


