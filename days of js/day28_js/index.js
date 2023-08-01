//get all header elements
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const country = document.querySelector('#country');
const scores = document.querySelector('#score');
const subButton = document.querySelector('#btn');

//get warning p
const warning = document.querySelector('.warning')

//get all country names from country data and save into a variable


//current time
const now = new Date()
let month = now.getMonth()
let day = now.getDate()
day < 10 ? day = '0' + day: day;
let year = now.getFullYear()
let hour = now.getHours()
hour < 10 ? hour = '0' + hour : hour;
let minute = now.getMinutes()
minute < 10 ? minute = '0' + minute: minute;
const currentTime = `${month.toLocaleString()} ${day} ${year} ${hour}:${minute}`
console.log(currentTime)

//add event listener to button and create function to add new element when all fields are filled;
subButton.addEventListener('click', () => {
    const fValue = firstName.value.trim()
    const lValue = lastName.value.trim()
    const cValue = country.value.trim()
    const sValue = score.value.trim()
    if(fValue === '' || lValue === '' || cValue === '' || sValue === ''){
        warning.textContent = 'All Fields Required'
    }

   //create playborad container and add necessary elements based on input value
  const playBoard = document.createElement('div')
  playBoard.className = 'playerBoard'
  const player = document.createElement('span')
  player.className = 'player'
  const name = document.createElement('p')
  playBoard.textContent = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`

})
