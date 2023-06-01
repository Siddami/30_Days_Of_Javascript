//1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback)
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  const totalPrice = products.filter(callback => callback.price > 0).map(callback => callback.price).reduce((callback, price) => callback + price, 0);
  console.log(totalPrice);

//2.Find the sum of price of products using only reduce reduce(callback))
const sumOfPrice = products.reduce((sum, obj) =>{
   if(obj.price > 0){
    return sum + obj.price;
   }else{
    return sum;
   }
},0);
console.log(sumOfPrice);

//3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern
//(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

const countries = ['United States', 'France', 'United Kingdom', 'Urguay', 'Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
function categorizeCountries(pattern){
    const countryCategory = countries.filter((country) => country.toLowerCase().includes(pattern.toLowerCase())
    )
    return countryCategory;
}
console.log(categorizeCountries('ia'));

//4. Create a function which return an array of objects,
//which is the letter and the number of times the letter use to start with a name of a country.

const getLetterFrequency = () => {
    const frequency = {};

    countries.forEach(country => {
        const firstLetter = country.charAt(0).toUpperCase();
        frequency[firstLetter] = (frequency[firstLetter] || 0) + 1;
    })

    const result = Object.entries(frequency).map(([letter, count]) =>({
        letter,
        count,
    }))

    return result;
}
console.log(getLetterFrequency())

//5. Declare a getFirstTenCountries function and return an array of ten countries.
//Use different functional programming to work on the countries.js array
 function getFirstTenCountries(){
     return countries
     .slice(0, 10)
}
const firstTenCountries = getFirstTenCountries()
console.log(firstTenCountries);

const countryLengths = firstTenCountries.map(function(country){
    return country.length;
})
console.log(countryLengths);

const countryStartWithU = firstTenCountries.filter(function(country){
    return country.startsWith('U')
})
console.log(countryStartWithU);

//6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries = function(){
    return countries.slice(-10)
}
console.log(getLastTenCountries());

//7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
// Step 1: Extract the first letter from each country name
var initials = countries.map(function(country) {
    return country.charAt(0).toUpperCase();
  });

  // Step 2: Count the occurrence of each letter
  var letterCounts = initials.reduce(function(counts, letter) {
    if (counts.hasOwnProperty(letter)) {
      counts[letter]++;
    } else {
      counts[letter] = 1;
    }
    return counts;
  }, {});

  // Step 3: Sort the letters based on their counts in descending order
  var sortedLetters = Object.keys(letterCounts).sort(function(a, b) {
    return letterCounts[b] - letterCounts[a];
  });

  // Step 4: Get the letter with the highest count
  var mostFrequentLetter = sortedLetters[0];
  console.log("Most frequent initial letter for country names:", mostFrequentLetter);
  console.log("Count:", letterCounts[mostFrequentLetter]);
