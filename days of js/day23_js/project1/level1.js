//get the elements in the intro header and style
const header = document.querySelector('header')
const h1 = document.querySelector('h1')
const challenge = document.querySelector('.challenge')
const p = document.querySelector('.p')

header.style.textAlign = 'center'
header.style.lineHeight='0.7'
header.style.fontFamily= 'Georgia'
header.style.margin = '20px auto'
h1.style.color = '#24a331'
challenge.style.textDecoration = 'underline'
challenge.style.fontSize = '18px'
p.style.fontSize = '13px'

//get the input container and elements and style
const inputContainer = document.querySelector('.inputBox')
inputContainer.style.margin = '0 auto'
inputContainer.style.display = 'flex'
inputContainer.style.justifyContent = 'center'
inputContainer.style.alignItems = 'center'

//elements in input container
const label = document.querySelector('.label')
const input = document.querySelector('input')
const button = document.querySelector('button')
input.style.margin = '23px'
input.style.padding = '10px'
input.style.width = '45%'
input.style.border = '1px solid #24a331'
input.style.cursor = 'pointer'
button.style.padding = '8px'
button.style.backgroundColor = '#24a331'
button.style.color = 'white'
button.style.cursor = 'pointer'

//next div container
const numWrapper = document.createElement('div')
numWrapper.className = 'wrapper';

//create a function to find prime numbers
function isPrime(num){
    if(num <= 1){
        return FontFaceSetLoadEvent;
    }

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true;
}

//style div
numWrapper.style.display = 'flex'
numWrapper.style.flexWrap = 'wrap'
numWrapper.style.width = '80%'
numWrapper.style.margin = '8px auto'
numWrapper.style.padding = '15px'
numWrapper.style.justifyContent = 'flex-start'
numWrapper.style.alignItems = 'center'

//append function
function append(){
    const inputValue = input.value.trim();
    if(inputValue === ''){
        label.textContent = 'Enter Number on the Input field to Generate'
        label.style.color = 'red'
        label.style.display = 'flex'
        label.style.justifyContent = 'center'
        label.style.alignItems = 'center'
        return;
    }else if(isNaN(inputValue)){
        label.textContent = 'Input value must be a number'
        label.style.color = 'red'
        label.style.display = 'flex'
        label.style.justifyContent = 'center'
        label.style.alignItems = 'center'
        return;
    }
    for(let i = 0; i <= inputValue; i++){
        const span = document.createElement('span');
        span.style.fontSize = '2rem'
        span.style.color = 'white'
        span.style.display = 'block'
        span.style.textAlign = 'center'
        span.style.width = '10%'
        span.style.margin = '5px'
        span.style.padding = '10px'
        span.style.fontWeight = 'bolder'

        if(i % 2 === 0){
           span.style.backgroundColor = '#24a331'
        }else if(isPrime(i)){
           span.style.backgroundColor = '#e8382e'
        }else{
            span.style.backgroundColor = '#e8e22e'
        }

        span.textContent = i
        numWrapper.appendChild(span)
    }
    document.body.append(numWrapper)
}

//create numbers between 0 to added number using a loop then append
button.addEventListener('click', append)
input.addEventListener('change', ()=>{
    event.preventDefault()
    numWrapper.innerHTML = ''
    label.textContent = ''
})
