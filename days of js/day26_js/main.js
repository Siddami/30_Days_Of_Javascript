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
    allSorted.style.backgroundColor = '#4337bf'
    allSorted.style.borderColor = '#4337bf'
    sorted.forEach(country =>{
        const span = document.createElement('span')
        span.textContent = country.toUpperCase()
        span.style.fontSize = '1rem'
        span.style.fontWeight = 'bold'
        span.style.background = 'linear-gradient(45deg, rgba(35, 60, 130, 0.6), rgba(137, 137, 204, 0.7)), url(./images/map_image.jpg)'
        span.style.backgroundSize = 'contain'
        span.style.color = 'white'
        span.style.display = 'flex'
        span.style.flexWrap = 'wrap'
        span.style.justifyContent = 'center'
        span.style.alignItems = 'center'
        span.style.width = '15%'
        span.style.margin = '0.8rem'
        span.style.padding = '3rem'
        span.style.height = '20vh'
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
    startWith.style.backgroundColor = '#4337bf'
    startWith.style.borderColor = '#4337bf'
    inputV = input.value.trim();
    let count = 0;

    sorted.forEach(country => {
        if(country.startsWith(inputV.toUpperCase())){
            count++;

            const span = document.createElement('span')
            span.textContent = country.toUpperCase();
            span.style.fontSize = '1rem'
            span.style.fontWeight = 'bold'
            span.style.background = 'linear-gradient(45deg, rgba(35, 60, 130, 0.6), rgba(137, 137, 204, 0.7)), url(./images/map_image.jpg)'
            span.style.backgroundSize = 'contain'
            span.style.color = 'white'
            span.style.display = 'flex'
            span.style.flexWrap = 'wrap'
            span.style.justifyContent = 'center'
            span.style.alignItems = 'center'
            span.style.width = '15%'
            span.style.margin = '0.8rem'
            span.style.padding = '3rem'
            span.style.height = '20vh'
            span.style.flexShrink = '1'
            span.style.boxShadow = '2px 2px 2px grey'
            span.style.borderRadius = '5px'

            countriesContainer.appendChild(span)
        }
    })
    p.innerHTML = `Countries starting with <span class="i">${input.value.trim()}</span> are <span class="c">${count}</span>`
    const i = document.querySelector('.i')
    i.style.color = 'red'
    i.style.textStyle = 'italic'
    const c = document.querySelector('.c')
    c.style.color = '#3bd94a'
})
startWith.addEventListener('blur', () => {
    startWith.style.backgroundColor = ''
    startWith.style.borderColor = ''
    countriesContainer.innerHTML = ''
    p.innerHTML = ''
})

//search with any
anyWord.addEventListener('click', () => {
    anyWord.style.backgroundColor = '##4337bf'
    anyWord.style.borderColor = '##4337bf'
    inputV = input.value.trim();
    let count = 0;
    console.log(input.value)
    sorted.forEach(country => {
        // if(input.value === ''){
        //     p.innerHTML = 'No input, please select input a letter'
        //     countriesContainer.innerHTML = ''
        // return;
        // }
        if(country.includes(inputV.toUpperCase())){
            count++;

            const span = document.createElement('span')
            span.textContent = country.toUpperCase();
            span.style.fontSize = '1rem'
            span.style.fontWeight = 'bold'
            span.style.background = 'linear-gradient(45deg, rgba(35, 60, 130, 0.6), rgba(137, 137, 204, 0.7)), url(./images/map_image.jpg)'
            span.style.backgroundSize = 'contain'
            span.style.color = 'white'
            span.style.display = 'flex'
            span.style.flexWrap = 'wrap'
            span.style.justifyContent = 'center'
            span.style.alignItems = 'center'
            span.style.width = '15%'
            span.style.margin = '0.8rem'
            span.style.padding = '3rem'
            span.style.height = '20vh'
            span.style.flexShrink = '1'
            span.style.boxShadow = '2px 2px 2px grey'
            span.style.borderRadius = '5px'

            countriesContainer.appendChild(span)
        }
    })
    p.innerHTML = `Countries that include <span class="i">${input.value.trim()}</span> are <span class="c">${count}</span>`
    const i = document.querySelector('.i')
    i.style.color = 'red'
    i.style.textStyle = 'italic'
    const c = document.querySelector('.c')
    c.style.color = '#3bd94a'
})
anyWord.addEventListener('blur', () => {
    anyWord.style.backgroundColor = ''
    anyWord.style.borderColor = ''
    countriesContainer.innerHTML = ''
    p.innerHTML = ''
})
