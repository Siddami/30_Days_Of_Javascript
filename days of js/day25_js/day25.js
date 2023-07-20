//get elements
const subtitle = document.querySelector('.subtitle')
const feedback = document.querySelector('.feedback')

const graphTitle = document.querySelector('.graph-title')
const graphWrapper = document.querySelector('.graph-wrapper')

const population = document.querySelector('.population')
const languages = document.querySelector('.languages')

//calculate total countries
let count = 0
countries_data.forEach(data => {
    count++;
})
console.log(count)

//feedback p content
feedback.textContent = `Currently, we have ${count} countries`

//calculate minimum population
const min = Math.min(...countries_data.map(country => country.population))

//calculate world population
let total = 0;
countries_data.forEach(data => {
    total += data.population;
})
const grandTotal = total.toLocaleString();
console.log(grandTotal)

//max percentage
const maxPercentage = (total - min) / (total -min) * 100;

//find the 10 most populated countries
  countries_data.sort((a, b) => b.population - a.population);
  const top10PopulatedCountries = countries_data.slice(0, 10);
  const result = top10PopulatedCountries.map(country => ({
    country: country.name,
    population: country.population
  }));

//population graph function
function getPopulation(){
    //graph title
    graphTitle.textContent = '10 Most Populated Countries in the world'

   //world data
   const container = document.createElement('div')
   container.style.display = 'flex'
   container.style.justifyContent = 'space-evenly'
   container.style.alignItems = 'center'

   const worldName = document.createElement('span')
   worldName.style.display = 'block'
   worldName.textContent= 'World'
   worldName.style.padding = '15px'
   worldName.style.margin = '10px'
   worldName.style.width = '20%'

   const boxContainer = document.createElement('div')
   boxContainer.style.width = '60%'
   boxContainer.style.padding = '15px'
   boxContainer.style.margin = '10px'

   const actualBox = document.createElement('span')
   boxContainer.appendChild(actualBox)
   actualBox.style.display = 'block'
   actualBox.style.padding = '18px'
   actualBox.style.backgroundColor = 'orange'
   actualBox.style.width = `${maxPercentage}%`

   const worldPop = document.createElement('span')
   worldPop.style.display = 'block'
   worldPop.textContent = grandTotal;
   worldPop.style.padding = '15px'
   worldPop.style.margin = '10px'
   worldPop.style.width = '20%'

   container.appendChild(worldName)
   container.appendChild(boxContainer)
   container.appendChild(worldPop)
   graphWrapper.appendChild(container)
let percentage;

result.forEach(data => {
 percentage = (data.population - min) / (total - min) * 100;

 const container = document.createElement('div')
 container.style.display = 'flex'
 container.style.justifyContent = 'space-evenly'
 container.style.alignItems = 'center'

 const name = document.createElement('span')
 name.textContent= data.country
 name.style.display = 'block'
 name.style.padding = '15px'
 name.style.margin = '10px'
 name.style.width = '20%'

 const boxContainer = document.createElement('div')
 boxContainer.style.width = '60%'
 boxContainer.style.padding = '15px'
 boxContainer.style.margin = '10px'

 const actualBox = document.createElement('span')
 boxContainer.appendChild(actualBox)
 actualBox.style.display = 'block'
 actualBox.style.padding = '18px'
 actualBox.style.backgroundColor = 'orange'
 actualBox.style.width = `${percentage}%`

 const pop = document.createElement('span')
 pop.textContent = data.population.toLocaleString();
 pop.style.display = 'block'
 pop.style.padding = '15px'
 pop.style.margin = '10px'
 pop.style.width = '20%'

    container.appendChild(name)
    container.appendChild(boxContainer)
    container.appendChild(pop)

    graphWrapper.appendChild(container)
})
}

//find 10 most spoken languages
// Create an empty object to store language frequency
const languageFrequency = {};

// Loop through each country and its languages
countries_data.forEach(country => {
country.languages.forEach(language => {
// Check if language is already in the object, if yes, increment its frequency by 1, else add it to the object with frequency 1
if (languageFrequency[language]) {
languageFrequency[language]++;
} else {
languageFrequency[language] = 1;
}
});
});
// Sort the languages by frequency in descending order
const sortedLanguages = Object.keys(languageFrequency).sort((a, b) => languageFrequency[b] - languageFrequency[a]);
// Get the top 2 most spoken languages and their frequency
const mostSpokenLanguages = sortedLanguages.slice(0, 10).map(language => ({
language: language,
frequency: languageFrequency[language]
}));

//calculate least spoken language
const maxLang = Math.max(...mostSpokenLanguages.map(lang => lang.frequency))
const minLang = Math.min(...mostSpokenLanguages.map(lang => lang.frequency))

function getLanguages(){
//graph title
graphTitle.textContent = '10 Most Spoken Languages in the world'

let percentage;

mostSpokenLanguages.forEach(data => {
 percentage = (data.frequency - minLang) / (maxLang - minLang) * 100;

 const container = document.createElement('div')
 container.style.display = 'flex'
 container.style.justifyContent = 'space-evenly'
 container.style.alignItems = 'center'

 const name = document.createElement('span')
 name.textContent= data.language
 name.style.padding = '15px'
 name.style.margin = '10px'
 name.style.width = '20%'

 const boxContainer = document.createElement('div')
 boxContainer.style.width = '60%'
 boxContainer.style.padding = '15px'
 boxContainer.style.margin = '10px'

 const actualBox = document.createElement('span')
 boxContainer.appendChild(actualBox)
 actualBox.style.display = 'block'
 actualBox.style.padding = '18px'
 actualBox.style.backgroundColor = 'orange'
 actualBox.style.width = `${percentage}%`

 const pop = document.createElement('span')
 pop.textContent = data.frequency;
 pop.style.padding = '15px'
 pop.style.margin = '10px'
 pop.style.width = '20%'

    container.appendChild(name)
    container.appendChild(boxContainer)
    container.appendChild(pop)

    graphWrapper.appendChild(container)
})
}
population.addEventListener('click', getPopulation)
population.addEventListener('blur', () => {
    graphTitle.textContent = ''
    graphWrapper.innerHTML = ''
})
languages.addEventListener('click', getLanguages)
languages.addEventListener('blur', () => {
    graphTitle.textContent = ''
    graphWrapper.innerHTML = ''
})
