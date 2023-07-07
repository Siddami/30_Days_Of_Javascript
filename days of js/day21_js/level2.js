// //1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
const pElements = document.querySelectorAll('p');
pElements[0].style.color = 'blue';
pElements[0].style.backgroundColor = 'grey'
pElements[0].style.fontSize = '25px';
pElements[0].style.fontFamily = 'timesNewRoman'
pElements[1].style.color = 'green';
pElements[1].style.backgroundColor = 'purple'
pElements[1].style.fontSize = '22px';
pElements[1].style.fontFamily = 'serif'
pElements[2].style.color = 'red';
pElements[2].style.backgroundColor = 'green'
pElements[2].style.fontSize = '20px';
pElements[2].style.fontFamily = 'sanserif'
pElements[3].style.color = 'black';
pElements[3].style.backgroundColor = 'aqua'
pElements[3].style.fontSize = '18px';
pElements[3].style.fontFamily = 'Monospace'
console.log(pElements);

//2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green,
//and the second and the fourth paragraph a red color
pElements.forEach((title, i) => {
    title.style.fontSize = '24px'
    title.style.fontFamily = 'sanserif'
    if(i % 2 === 0){
        title.style.color = 'red'
    }else{
        title.style.color = 'green'
    }
});


//3. Set text content, id and class to each paragraph
pElements[0].textContent = 'This is the first paragraph element'
pElements[0].id = 'firstParagraphId'
pElements[0].class = 'firstParagraphClass'
pElements[1].textContent = 'This is the second paragraph element'
pElements[1].id = 'secondParagraphId'
pElements[1].class = 'secondParagraphClass'
pElements[2].textContent = 'This is the Third paragraph element'
pElements[2].id = 'thirdParagraphId'
pElements[2].class = 'thirdParagraphClass'
pElements[3].textContent = 'This is the fourth paragraph element'
pElements[3].id = 'fourthParagraphId'
pElements[3].class = 'fourthParagraphClass'
console.log(pElements)
