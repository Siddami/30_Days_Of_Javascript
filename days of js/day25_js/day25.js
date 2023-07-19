//get elements
const subtitle = document.querySelector('.subtitle')
const feedback = document.querySelector('.feedback')

const graphTitle = document.querySelector('.graph-title')
const graphWrapper = document.querySelector('.graph-wrapper')

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
   //world data
   const container = document.createElement('div')
   container.style.display = 'flex'
   container.style.justifyContent = 'space-between'
   container.style.alignItems = 'center'

   const worldName = document.createElement('span')
   worldName.textContent= 'World'
   worldName.style.padding = '5px'
   worldName.style.margin = '5px'
   worldName.style.width = '8%'

   const boxContainer = document.createElement('div')
   boxContainer.style.width = '450px'
   boxContainer.style.padding = '5px'
   boxContainer.style.margin = '5px'

   const actualBox = document.createElement('span')
   boxContainer.appendChild(actualBox)
   actualBox.style.display = 'block'
   actualBox.style.padding = '18px'
   actualBox.style.backgroundColor = 'orange'
   actualBox.style.width = `${maxPercentage}%`

   const worldPop = document.createElement('span')
   worldPop.textContent = grandTotal;
   worldPop.style.padding = '5px'
   worldPop.style.margin = '5px'
   worldPop.style.width = '8%'

   container.appendChild(worldName)
   container.appendChild(boxContainer)
   container.appendChild(worldPop)
   graphWrapper.appendChild(container)
//calculate each pop percentage
let percentage;

result.forEach(data => {
 percentage = (data.population - min) / (total - min) * 100;

 const container = document.createElement('div')
 container.style.display = 'flex'
 container.style.justifyContent = 'space-between'
 container.style.alignItems = 'center'

 const name = document.createElement('span')
 name.textContent= data.country
 name.style.padding = '5px'
 name.style.margin = '5px'
 name.style.width = '8%'

 const boxContainer = document.createElement('div')
 boxContainer.style.width = '450px'
 boxContainer.style.padding = '5px'
 boxContainer.style.margin = '5px'

 const actualBox = document.createElement('span')
 boxContainer.appendChild(actualBox)
 actualBox.style.display = 'block'
 actualBox.style.padding = '18px'
 actualBox.style.backgroundColor = 'orange'
 actualBox.style.width = `${percentage}%`

 const pop = document.createElement('span')
 pop.textContent = data.population.toLocaleString();
 pop.style.padding = '5px'
 pop.style.margin = '5px'
 pop.style.width = '8%'

    container.appendChild(name)
    container.appendChild(boxContainer)
    container.appendChild(pop)

    graphWrapper.appendChild(container)
})

}
getPopulation()
