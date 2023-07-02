//1. Create an index.html file and put four p elements as above:
//Get the first paragraph by using document.querySelector(tagname) and tag name
const firstP = document.querySelector('p')

//2. Get each of the the paragraph using document.querySelector('#id') and by their id
const num1 = document.querySelector('#first-paragraph')
const num2 = document.querySelector('#sec-paragraph')
const num3 = document.querySelector('#third-paragraph')
const num4 = document.querySelector('#forth-paragraph')
console.log(num1, num2, num3, num4)

//3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const allP = document.querySelectorAll('p')
console.log(allP)

//4. Loop through the nodeList and get the text content of each paragraph
allP.forEach(element => {
    console.log(element.textContent)
});

//5.Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const contentChange = num4.textContent = 'This is the Fourth Paragraph';
console.log(contentChange)

//6.Set id and class attribute for all the paragraphs using different attribute setting methods
//6a. set id in three ways
//object type
allP[3].className = 'titles'
allP[3].id = 'fourth-title'

//setAttribute
allP[2].setAttribute('class','titles');
allP[2].setAttribute('id', 'class-title');
console.log(allP)
