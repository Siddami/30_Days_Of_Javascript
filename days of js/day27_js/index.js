const myDescription = document.querySelector('.myDescription');
const spanContent = document.querySelector('.icons')
const box = document.querySelectorAll('.c')

let current = 0;
function changeContent(){
    const iconsArray = [
        '💻',
        '🔥',
        '📚'
    ]
    const contentArray =[
        ' FrontEnd Developer',
        ' Passionate Individual',
        ' Constant Learner'
    ]
  myDescription.textContent = contentArray[current]
  spanContent.textContent = iconsArray[current]

  current = (current + 1) % iconsArray.length
}
setInterval(changeContent, 1000)

box.forEach(b => {
    b.addEventListener('mouseenter', () => {
        b.style.backgroundColor = 'rgb(194, 145, 131)'
        b.style.cursor = 'pointer'
    })

    b.addEventListener('mouseout', () => {
        b.style.backgroundColor = ''
        b.style.cursor = ''
    })

})

const tech = document.querySelector('.tech')
tech.style.fontSize = '2rem'
tech.style.fontWeight = 'bold'
const tenCourses = asabenehChallenges2020.keywords.slice(0, 11);

const colors = ['red', 'green', 'blue', 'purple', 'orange'];// Define an array of styles
let currentIndex = 0;
let currentStyleIndex = 0;
function changeStyle() {
    // Increment the style index
    currentStyleIndex++;
    // Reset the index if it exceeds the length of the styles array
    if (currentStyleIndex >= colors.length) {
      currentStyleIndex = 0;
    }

    tech.textContent = tenCourses[currentIndex]
    currentIndex = (currentIndex + 1) % tenCourses.length;
    tech.style.color = colors[currentStyleIndex];

    // Apply the new style
  }
  setInterval(changeStyle, 1000);
