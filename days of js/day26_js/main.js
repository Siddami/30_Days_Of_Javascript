//get elements
const h4 = document.querySelector('h4');
const p = document.querySelector('p');
const startWith = document.querySelector('.startWith');
const anyWord = document.querySelector('.anyWord');
const allSorted = document.querySelector('.allSorted');
const input =document.querySelector('input')
const countriesContainer = document.querySelector('.countriesContainer')

//calulated total number of countries and append to h4
let count = 0;
countries.forEach(country => {
    count++;
})
h4.textContent = `Total Number of Countries: ${count}`

//sort countries alphabetically
const sorted = countries.sort((a,b) => a - b);

//all countries appended on sort click
allSorted.addEventListener('click', () => {
    allSorted.style.backgroundColor = '#45308a'
    allSorted.style.borderColor = '#45308a'
    sorted.forEach(country =>{
        const span = document.createElement('span')
        span.textContent = country.toUpperCase()
        span.style.fontSize = '1.2rem'
        span.style.fontWeight = 'bold'
        span.style.background = 'linear-gradient(45deg, rgba(35, 60, 130, 0.6), rgba(137, 137, 204, 0.7)), url(./images/map_image.jpg)'
        span.style.backgroundSize = 'contain'
        span.style.color = 'white'
        span.style.display = 'flex'
        span.style.justifyContent = 'center'
        span.style.alignItems = 'center'
        span.style.width = '12%'
        span.style.margin = '0.8rem'
        span.style.padding = '2rem'
        span.style.height = '18vh'
        span.style.flexShrink = '1'
        span.style.boxShadow = '2px 2px 2px grey'
        span.style.borderRadius = '5px'

    countriesContainer.appendChild(span)
    })
})
allSorted.addEventListener('blur', () => {
       allSorted.style.backgroundColor = ''
       allSorted.style.borderColor = ''
       countriesContainer.innerHTML = ''
})

//starts with function
let inputv;
startWith.addEventListener('click', () => {
    startWith.style.backgroundColor = '#45308a'
    startWith.style.borderColor = '#45308a'
    inputV = input.value.trim();
    let count = 0;
    const iSpan = document.createElement('span')
    const cSpan = document.createElement('span')

    sorted.forEach(country => {
        if(country.startsWith(inputV.toUpperCase())){
            count++;

            const span = document.createElement('span')
            span.textContent = country.toUpperCase();
            span.style.fontSize = '1.08rem'
            span.style.fontWeight = 'bold'
            span.style.background = 'linear-gradient(45deg, rgba(35, 60, 130, 0.6), rgba(137, 137, 204, 0.7)), url(./images/map_image.jpg)'
            span.style.backgroundSize = 'contain'
            span.style.color = 'white'
            span.style.display = 'flex'
            span.style.justifyContent = 'center'
            span.style.alignItems = 'center'
            span.style.width = '12%'
            span.style.margin = '0.8rem'
            span.style.padding = '2rem'
            span.style.height = '18vh'
            span.style.flexShrink = '1'
            span.style.boxShadow = '2px 2px 2px grey'
            span.style.borderRadius = '5px'

            countriesContainer.appendChild(span)
        }
    })
    p.textContent = `Number of countries that starts with ${input.value.trim()}: ${count}`
})
startWith.addEventListener('blur', () => {
    startWith.style.backgroundColor = ''
    startWith.style.borderColor = ''
    countriesContainer.innerHTML = ''
})
