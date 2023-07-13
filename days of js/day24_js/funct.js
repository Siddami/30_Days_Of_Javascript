//get input box and select and button
const input = document.querySelector('#mass')
const select = document.querySelector('select')
const button = document.querySelector('button')

//get containers
const flexContainer = document.querySelector('.flex-container')
const flexItem = document.querySelector('.flex-item')
const description = document.querySelector('.description')
const images = document.querySelector('.image')
const planetImage = document.querySelector('.planet-image')

//p tag
const p = document.createElement('P')
p.style.background = 'rgba(83, 83, 83, 0.5)'
p.style.textAlign = 'center'
p.style.padding = '15px'
p.style.margin = '10px auto'
p.style.color = 'white'
p.style.fontSize = '1.2rem'

//define gravitational constants
const gravityConstants = {
    "MERCURY": 3.7,
    "VENUS": 8.87,
    "EARTH": 9.81,
    "MOON": 1.62,
    "MARS": 3.71,
    "JUPITER": 24.79,
    "SATURN": 10.44,
    "URANUS": 8.69,
    "NEPTUNE": 11.15,
    "PLUTO": 0.62 // Yes, Pluto is still a planet in our hearts!
  };

//event listener
button.addEventListener('click', () => {
   //get selected options
  let selectedIndex = select.selectedIndex;
  let selectedOption = select.options[selectedIndex];
  let selectedValue = selectedOption.value;
  let selectedText = selectedOption.text;

    if(input.value.trim() === "" && selectedValue === "none") {
        p.textContent = "Mass Field Required";
        flexContainer.removeChild(images);
        description.appendChild(p)
      }else if(input.value.trim() === "" && selectedValue !== "none"){
        p.textContent = "Mass Field Required";
        flexContainer.removeChild(images)
        description.appendChild(p)
      }else if(input.value.trim() !== "" && selectedValue === "none") {
        p.textContent = "You did not choose a planet yet";
        flexContainer.removeChild(images)
        description.appendChild(p)
      }

  //change the planet images based on selection using switch
  switch(selectedText){
    case 'MERCURY':
      planetImage.src = "./image/mercury.png";
    break;
    case 'VENUS':
      planetImage.src = "./image/venus.png";
    break;
    case 'EARTH':
      planetImage.src = "./image/earth.png";
    break;
    case 'MOON':
      planetImage.src = "./image/moon.png";
    break;
    case 'MARS':
      planetImage.src = "./image/mars.png";
    break;
    case 'JUPITER':
      planetImage.src = "./image/jupiter.png";
    break;
    case 'SATURN':
      planetImage.src = "./image/saturn.png";
    break;
    case 'URANUS':
      planetImage.src = "./image/uranus.png";
    break;
    case 'NEPTUNE':
      planetImage.src = "./image/neptune.png";
    break;
    case 'PLUTO':
      planetImage.src = "./image/pluto.png";
}



    if(gravityConstants.hasOwnProperty(selectedText)){
        const gravity = gravityConstants[selectedText];
        const weight = Math.floor(input.value.trim() * gravity)

        description.innerHTML =`<p>The Weight of the Object on <strong>${selectedText}</strong> <span>${weight}.00 N</span></p>`

        //get p element
        const pD = document.querySelector('.description p')
        pD.style.color = 'white'
        pD.style.textAlign = 'center'
        pD.style.fontSize = '1.2rem'

        const span = document.querySelector('span')
        span.style.textAlign = 'center'
        span.style.color = '#fff'
        span.style.fontWeight = 'bold'
        span.style.fontSize = '1.5rem'
        span.style.display = 'flex'
        span.style.justifyContent = 'center'
        span.style.alignItems = 'center'
        span.style.margin = '10px auto'
        span.style.width = '130px'
        span.style.height = '140px'
        span.style.borderRadius = '50%'
        span.style.backgroundColor = 'rgba(83, 83, 83, 0.5)'

        images.style.width = '50%'
        flexContainer.style.justifyContent = 'space-around'
        description.style.width = '50%'
        description.style.margin = '10px'
        description.style.padding = '15px'
        description.style.backgroundColor = 'rgba(85, 85, 85, 0.5)'
  }
})
document.body.addEventListener('dblclick', ()=>{
    location.reload();
})
