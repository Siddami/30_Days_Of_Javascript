//get the container div element
const container = document.querySelector('.wrapper')

//create all elements and append to the wrapper
const h1Statement = `${asabenehChallenges2020.description} in <span>${asabenehChallenges2020.challengeYear}`
const h1 = document.createElement('h1')
h1.innerHTML = h1Statement
container.appendChild(h1)

//style the year span
//get the data via the span tag and change font size
const dateString = document.querySelector('span')
dateString.style.fontSize = '70px'
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
setInterval(changeStyle, 1000); // Call the changeStyle function every second


//create the p tag after the top info
const pStatement = `${asabenehChallenges2020.challengeSubtitle}`
const p = document.createElement('p')
p.textContent = pStatement
container.appendChild(p);

//add new p element after the h2 and p element before th ul element
const newP = document.createElement('p')
const date = new Date()
const monthString = date.toLocaleString('en-US', { dateStyle: 'full'});
newP.textContent = monthString;
container.appendChild(newP);

//set the styling for newP
const bgColors = ['orange', 'grey', 'yellow', 'green', 'red'];// Define an array of styles
newP.style.margin ='10px auto'
newP.style.marginBottom = '50px'
newP.style.padding = '10px'
newP.style.width = '30%'
newP.style.textAlign = 'center'

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


//create a ul element
const ul = document.createElement('ul')

//create a programming languages array and iterate though each
asabenehChallenges2020.challenges.forEach((challenge) =>{
    //create li element for each language
    const li = document.createElement('li')
    li.className = 'challenges'
    li.textContent = challenge.name

    //create a details and summary element for each challenge
    const details = document.createElement('details');
    const summary = document.createElement('summary');

    //make the first item of the topics list be the summary
     summary.textContent = challenge.name.slice(11)
     details.appendChild(summary)

    //create a ul element inside the li element
    const topicsList = document.createElement('ul');
    //iterate over each topic and make it the textcontent of li elements created in the loop
    challenge.topics.forEach((topic)=>{
        const topicItem = document.createElement('li');
        topicItem.className ='topics'
        topicItem.textContent = topic;
        topicsList.appendChild(topicItem);
    })
    details.appendChild(topicsList);//append the finished variable to the details element

    li.appendChild(details)//append the details element to the parent li element

    const status = document.createElement('span');//create a span tag for the challenge status
    status.textContent = challenge.status;//make each challenge status e a content of each span
    li.appendChild(status);//append status to the parent li element

    ul.appendChild(li);//append the parent li element to the overall parent ul element
})
container.appendChild(ul)//append the ul element to the container


//styling of the elements
h1.style.textAlign = 'center';
p.style.textAlign = 'center';
p.style.textDecoration = 'underline'
p.style.fontSize ="18px"

//get each challenge by className and style
const challenge = document.querySelectorAll('.challenges')

challenge.forEach(c => {
    c.style.fontSize = '18px'
    c.style.display = "flex";
    c.style.justifyContent = "space-between";
    c.style.alignItems = "center";
    c.style.listStyleType = 'none'
    c.style.margin = '10px auto'
    c.style.padding = '15px'
    c.style.width = '70%'
  if(c.textContent.includes('Done')){
    c.style.backgroundColor = 'green'
  }else if(c.textContent.includes('Ongoing')){
    c.style.backgroundColor = 'yellow'
  }else{
    c.style.backgroundColor = 'red'
  }
})

//create a new div, h3, p element and multiple span tags
const h2 = document.createElement('h2')
h2.textContent = `${asabenehChallenges2020.author['firstName']} ${asabenehChallenges2020.author['lastName']}`
container.appendChild(h2)

//style div and h3
h2.style.display = 'flex'
h2.style.justifyContent = 'center'
h2.style.alignItems = 'center'
h2.style.fontSize = '30px'

//create icons
const div = document.createElement('div')

asabenehChallenges2020.author.socialLinks.forEach(link => {
    const linkElement = document.createElement('a');
    linkElement.href =link.url

    linkElement.innerHTML = link.fontawesomeIcon;
    linkElement.style.textDecoration = 'none'
    linkElement.style.padding = '8px'

    div.appendChild(linkElement)
})
container.appendChild(div)

div.style.textAlign="center"
div.style.fontSize= "30px"


//const create div and p element
const pDiv = document.createElement('div')
const pE = document.createElement('p')
pE.textContent = asabenehChallenges2020.author.bio
pDiv.appendChild(pE)
container.appendChild(pDiv)

pDiv.style.paddingLeft = '10px'
pE.style.textAlign = "center"


//create another div element for titles, skills and qualifications
const div1 = document.createElement('div')
div1.className = 'containerDiv'
container.appendChild(div1)

//titles
const div2 = document.createElement('div')
const titleUl = document.createElement('ul')
const th4 = document.createElement('h4')
th4.textContent = 'Titles'
titleUl.appendChild(th4)
asabenehChallenges2020.author.titles.forEach(title => {
     const li = document.createElement('li')
     li.textContent = `${title[0]}${title[1]}`
     li.style.listStyle = 'none'
     titleUl.appendChild(li)
})
div2.appendChild(titleUl)
container.appendChild(div2)

//skills
const div3 = document.createElement('div')
const skillsUl = document.createElement('ul')
const sh4 = document.createElement('h4')
sh4.textContent = 'Skills'
skillsUl.appendChild(sh4)
asabenehChallenges2020.author.skills.forEach(skill => {
     const li = document.createElement('li')
     li.textContent = `✅${skill}`
     li.style.listStyleType = 'none'

     skillsUl.appendChild(li)
})
div3.appendChild(skillsUl)
container.appendChild(div3)

//qualifications
const div4 = document.createElement('div')
const qualUl = document.createElement('ul')
const qh4 = document.createElement('h4')
qh4.textContent = 'Qualifications'
qualUl.appendChild(qh4)
asabenehChallenges2020.author.qualifications.forEach(q => {
     const li = document.createElement('li')
     if(q === 'MSc. Computer Science Ongoing'){
        li.textContent = `📓${q}`
     }else{li.textContent = `👩🏽‍🎓${q}`}
     li.style.listStyleType = 'none'
     li.style.paddingBottom = "5px"


     qualUl.appendChild(li)
})
div4.appendChild(qualUl)
container.appendChild(div4)

//append all divs into the container div and style
const theContainer = document.querySelector('.containerDiv')
theContainer.appendChild(div2)
theContainer.appendChild(div3)
theContainer.appendChild(div4)
theContainer.style.display = 'flex'
theContainer.style.justifyContent = "space-around"
theContainer.style.alignItems = "center"

//create function for random hexcode generating
function generateRandomHexCode() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
  setInterval(generateRandomHexCode, 1000)
  generateRandomHexCode();

//loop through the keywords object and append each in a span tag inside a div
const keywordsDiv = document.createElement('div')
asabenehChallenges2020.keywords.forEach(word => {
    const span = document.createElement('span')
    span.className = 'keywords'
    span.textContent = `#${word}`
    span.style.padding = '8px'
    span.style.margin = '5px'

    keywordsDiv.appendChild(span)
})
container.appendChild(keywordsDiv)
keywordsDiv.style.display = 'flex'
keywordsDiv.style.justifyContent = 'center'
keywordsDiv.style.alignItems = "center"
keywordsDiv.style.flexWrap = 'wrap'
keywordsDiv.style.padding = '15px'

//get all span tags
const allSpan = document.querySelectorAll('.keywords')
allSpan.forEach(keyword => {
    keyword.style.backgroundColor = generateRandomHexCode()
})


//get social media link class and style
const social = document.querySelectorAll('.fab')
social.forEach(media => {
    media.style.backgroundColor ='black'
    media.style.color = 'white'
})



//select and style all dic elements
const allDivs = document.querySelectorAll('div')
allDivs.forEach(div =>{
    div.style.width = '80%'
    div.style.margin = '0px auto'
})
