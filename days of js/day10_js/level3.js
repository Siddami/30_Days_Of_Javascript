//1. How many languages are there in the countries object file.
const languages = [
        { name: 'English', count: 1132 },
        { name: 'Mandarin Chinese', count: 1120 },
        { name: 'Hindi', count: 615 },
        { name: 'Spanish', count: 534 },
        { name: 'French', count: 280 },
        { name: 'Standard Arabic', count: 274 },
        { name: 'Bengali', count: 265 },
        { name: 'Russian', count: 258 },
        { name: 'Portuguese', count: 234 },
        { name: 'Indonesian', count: 199 },
        { name: 'Urdu', count: 170 },
        { name: 'German', count: 132 },
        { name: 'Japanese', count: 128 },
        { name: 'Swahili', count: 98 },
        { name: 'Telugu', count: 93 },
        { name: 'Marathi', count: 92 },
        { name: 'Tamil', count: 81 },
        { name: 'Turkish', count: 79 },
        { name: 'Italian', count: 68 },
        { name: 'Thai', count: 61 }
      ];

let newArr = languages.map((lang) => lang.name)
let languageSet = new Set(newArr);
console.log(languageSet.size);

//2. Use the countries data to find the 10 most spoken languages
(function mostSpokenLanguages(countries, numberOfCountries){
  let newLangArr = countries.map((lang) => [lang.name, lang.count])
  let mappedLanguages = new Map(newLangArr);
  const valuesArray = Array.from(mappedLanguages.entries()).map(([ key, value]) => ({key, value}));
  valuesArray.sort((a, b) => b.value - a.value);
  for(let i = 0; i < Math.min(numberOfCountries, valuesArray.length); i++){
        const { key, value } = valuesArray[i];
        console.log(`Languages: ${key}, Number: ${value}`);
  }

})(languages, 10);
