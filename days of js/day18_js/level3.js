//1. Read the cats api and find the average weight of cat in metric unit.
const catAPI = 'https://api.thecatapi.com/v1/breeds'
const catsInfo = async () => {
try{
    const response = await fetch(catAPI);
    const data = await response.json();
    console.log(data)
    data.forEach(cat => {
        const catname = cat.name
        const averageWeightMetric = cat['weight'].metric
        console.log(`Cat name:${catname} , Average weight: ${averageWeightMetric}
        -----------------------`)
    });
}catch (err){
    console.log(err)
}
}
catsInfo()


//2. Read the countries api and find out the 10 largest countries
const countriessAPI = 'https://restcountries.com/v2/all'
fetch(countriessAPI)
.then((response) => response.json())
.then((data) => {
    console.log(data)
    const sortedCountries = data.sort((a,b) => b.area - a.area);
    const largestCountries = sortedCountries.slice(0, 10);

    largestCountries.forEach(country => {
        console.log(country.name)
    });
}).catch((err) => console.log(err))

//3. Read the countries api and count total number of languages in the world used as officials.
fetch(countriessAPI)
  .then(response => response.json())
  .then(data => {
    let officialLanguages = [];

    // Iterate over each country and gather official languages
    data.forEach(country => {
      const languages = country.languages.filter(lang => lang.name);
      officialLanguages = officialLanguages.concat(languages);
    });

    // Remove duplicate languages
    const uniqueLanguages = [...new Set(officialLanguages)];

    // Count the total number of official languages
    const totalLanguages = uniqueLanguages.length;

    console.log('Total number of official languages:', totalLanguages);
  })
  .catch(error => console.error(error));
