//get the div container and other elements then style
const container = document.querySelector('div')
const h1E = document.querySelector('h1')
const h4E = document.querySelector('h4')
const pE = document.querySelector('p')
const body = document.querySelector('body')

h1E.style.textAlign = 'center'

h4E.style.textAlign = 'center'
h4E.style.textDecoration = 'underline'
pE.style.textAlign = 'center'
pE.style.textDecoration = 'underline'
//create a functio to find prime numbers
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

//create numbers between 1 to 100 using a loop then append
for(let i = 0; i <= 101; i++){
    const span = document.createElement('span');
    span.className = 'numbers'
    span.style.fontSize = '30px'
    span.style.color = 'white'
    span.style.display = 'block'
    span.style.textAlign = 'center'
    span.style.width = '12%'
    span.style.margin = '5px'
    span.style.padding = '10px'
    span.style.fontWeight = 'bold'

    if(i % 2 === 0){
       span.style.backgroundColor = 'green'
    }else if(isPrime(i)){
       span.style.backgroundColor = 'red'
    }else{
        span.style.backgroundColor = 'yellow'
    }

    span.textContent = i
    container.appendChild(span)

}

//style div
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.width = '80%'
container.style.margin = '8px auto'
container.style.padding = '10px'
container.style.justifyContent = 'space-evenly'
container.style.alignItems = 'center'
