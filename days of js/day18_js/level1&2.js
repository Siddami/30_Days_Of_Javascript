// //1. Read the countries API using fetch and print the
// //name of country, capital, languages, population and area.
// const countriesAPI = 'https://restcountries.com/v2/all'
// fetch(countriesAPI)
// .then((response)=> response.json())
// .then((data)=>{
//     data.forEach(country => {
//     const name = country.name
//     const capital = country.capital
//     const languages = country.languages.map(lang => lang.name).join(', ')
//     const population = country.population
//     const area = country.area
//     console.log(`Country: ${name}
//     Capital: ${capital}
//     Languages: ${languages}
//     Population: ${population}
//     Area: ${area}
//     ---------------------`);
// });
// })
// .catch(err => console.log(err));


//LEVEL 2
//1. Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const cats = async  () => {
try{
    const response = await fetch(catsAPI);
    const data = await response.json();
    data.forEach(catId => {
        const catNames = catId.name;
        console.log(`CatName: ${catNames}
        -----------------`)
    });
}catch(err){
    console.log(err);
}
}
cats();
