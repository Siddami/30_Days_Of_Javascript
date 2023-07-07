//get the container div element using its class and style
const containerDiv = document.querySelector('.countries')
containerDiv.style.display = 'flex'
containerDiv.style.flexWrap = 'wrap'
containerDiv.style.maxWidth = '1200px'
containerDiv.style.margin = '10px auto'
containerDiv.style.padding = '10px'
containerDiv.style.justifyContent = 'flexStart'
containerDiv.style.textAlign = 'center'
containerDiv.style.alignItems = 'center'
containerDiv.style.height = '100vh'
containerDiv.style.overFlow = 'scroll'

//get the elements in the into div and style
const theH1 = document.querySelector('h1')
theH1.style.fontSize = '40px'
theH1.style.fontFamily = 'serif'
theH1.style.marginBottom = '0'

const theH4 = document.querySelector('h4')
theH4.style.marginTop = '0';
theH4.style.marginBottom = '5px'

const pTags = document.querySelectorAll('p')
pTags.forEach(p =>{
    p.style.fontSize = '12px'
    p.style.fontFamily = 'serif'
})

//get intro div using class and style
const introDiv = document.querySelector('.intro')
introDiv.style.textAlign = 'center'
introDiv.style.lineSpacing = '1.5'

let count = 0
countries.forEach(element => {
  //create a new element span
  const span = document.createElement('span')
  span.textContent = element.toUpperCase()
  count++//counts the number of the countries
  containerDiv.appendChild(span)

  //style each span
    span.style.fontSize = '16px'
    span.style.backgroundColor = 'white'
    span.style.display = 'block'
    span.style.textAlign = 'center'
    span.style.width = '13%'
    span.style.margin = '8px'
    span.style.padding = '10px'
    span.style.height = '10%'
    span.style.flexBasis = '120px'
    span.style.boxShadow = '2px 2px 2px grey'
    span.style.border = '1px solid grey'
    span.style.borderRadius = '5px'
});

//change the total number element string
const string = `Total Number of Countries: ${count}`
theH4.innerHTML = string
