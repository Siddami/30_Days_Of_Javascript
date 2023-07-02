//get the div to style
const divElement = document.querySelector('div')
divElement.style.margin = '10px auto'
divElement.style.width = '70%'
divElement.style.textAlign = 'center'
divElement.style.padding = '10px'

//get the h1 element
const h1Element = document.querySelector('h1');

//create a new span tag around the date by replacing the normal h1 with a modifed h1
const newH1 = 'Asabeneh Yetayeh challenges in <span>2023</span>'
h1Element.innerHTML = newH1;
h1Element.style.fontSize = '25px';

//get the data via the span tag and change font size
const dateString = document.querySelector('span')
dateString.style.fontSize = '50px'

const colors = ['red', 'green', 'blue', 'purple', 'orange'];// Define an array of styles

// Set an initial style
let currentStyleIndex = 0;
dateString.style.color = colors[currentStyleIndex];

// Function to change the style every two seconds
function changeStyle() {
  // Increment the style index
  currentStyleIndex++;

  // Reset the index if it exceeds the length of the styles array
  if (currentStyleIndex >= colors.length) {
    currentStyleIndex = 0;
  }

  // Apply the new style
  dateString.style.color = colors[currentStyleIndex];
}
setInterval(changeStyle, 1000); // Call the changeStyle function every two seconds

//get the h2 element and style
const h2Element = document.querySelector('h2')
h2Element.style.fontWeight = '8px'
h2Element.style.textDecoration = 'underline'
h2Element.style.fontSize = '18px'

//add new p element after the h2 element before th ul element
const newP = document.createElement('p')
const date = new Date()
const monthString = date.toLocaleString('en-US', { dateStyle: 'full'});
newP.textContent = monthString;
divElement.insertBefore(newP, h2Element.nextSibling);

//set the styling for newP
const bgColors = ['orange', 'grey', 'yellow', 'green', 'red'];// Define an array of styles
newP.style.margin ='10px auto'
newP.style.padding = '10px'
newP.style.width = '30%'

// Set an initial style
let currentIndex = 0;
newP.style.backgroundColor = bgColors[currentIndex];

// Function to change the style every two seconds
function changeBgStyle() {
  // Increment the style index
  currentIndex++;

  // Reset the index if it exceeds the length of the styles array
  if (currentIndex >= bgColors.length) {
    currentIndex = 0;
  }

  // Apply the new style
  newP.style.backgroundColor = bgColors[currentIndex];
}
setInterval(changeBgStyle, 1000);

//get all the li elements
const allLiElements = document.querySelectorAll('li')
console.log(allLiElements)

//loop through all li elements and style
allLiElements.forEach((list, i) =>{
  list.style.listStyleType = 'none'
  list.style.margin = '10px auto'
  list.style.padding = '10px'
  list.style.textAlign = 'left'
  list.style.width = '50%'
  if(list.textContent.includes('Done')){
    list.style.backgroundColor = 'green'
  }else if(list.textContent.includes('Ongoing')){
    list.style.backgroundColor = 'yellow'
  }else{
    list.style.backgroundColor = 'red'
  }
})
