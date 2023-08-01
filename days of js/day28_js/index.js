//get all header elements
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const country = document.querySelector('#country');
const scores = document.querySelector('#score');
const subButton = document.querySelector('#btn');

//get warning p
const warning = document.querySelector('.warning')

//get all country names from country data and save into a variable


//add event listener to button and create function to add new element when all fields are filled;
subButton.addEventListener('click', () => {
    const fValue = firstName.value.trim()
    const lValue = lastName.value.trim()
    const cValue = country.value.trim()
    const sValue = score.value.trim()
    if(fValue === '' || lValue === '' || cValue === '' || sValue === ''){
        warning.textContent = 'All Fields Required'
    }
})
