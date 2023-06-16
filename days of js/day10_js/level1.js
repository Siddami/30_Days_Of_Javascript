//1. create an empty set
const emptySet = new Set();

//2. Create a set containing 0 to 10 using loop
let numberSet = new Set();
for(let i = 0; i <= 10; i++){
    numberSet.add(i);
}console.log(numberSet);

//3. Remove an element from a set
numberSet.delete(10);
console.log(numberSet);

//4.Clear a set
numberSet.clear();
console.log(numberSet);

//5. Create a set of 5 string elements from array
const arrayOfStringElement = ['Damilola', 'Damilola', 'Ayomide', 'Ola', 'Ola', 'JavaScript','Baby', 'Baby'];
const stringsSet = new Set();
for(const strings of arrayOfStringElement){
    stringsSet.add(strings)
}console.log(stringsSet)
console.log(stringsSet.size);

//6.Create a map of countries and number of characters of a country
const countryArray = ['Kenya','Nigeria','Ghana','Ethiopia','SouthAfrica'];
const countryAndChars = [];
for(const country of countryArray){
    countryAndChars.push([country, country.length])
}
const mapOfCountries = new Map(countryAndChars);
console.log(mapOfCountries);
