//1. Copy countries array(Avoid mutation)
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
// let countriesCpy = countries;
// console.log(countriesCpy);

// //2. Arrays are mutable. Create a copy of array which does not modify the original. 
// //Sort the copied array and store in a variable sortedCountries

// let sortedCountries = countriesCpy.sort();
// console.log(sortedCountries)

//3. Sort the webTechs array and mernStack array
const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
      ]
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

const sortedwebTechs = webTechs.sort();
const sortedmernStack = mernStack.sort();
console.log(sortedwebTechs);
console.log(sortedmernStack);

//4. Extract all the countries contain the word 'land' from the countries array and print it as array
let landCountries = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].includes('land')){
        landCountries.push(countries[i]);
    }
}console.log(landCountries)

//5. Find the country containing the hightest number of characters in the countries array
let highestNum = ''
for(let i = 0; i < countries.length; i++){
    let eachCountry = countries[i];
    if(eachCountry.length > highestNum.length){
        highestNum = eachCountry;
    }
}console.log(highestNum);

//6. Extract all the countries contain the word 'land' from the countries array and print it as array
const countriesWithLand = [];
let i = 0;
while (i < countries.length){
    if(countries[i].includes('land')){
        countriesWithLand.push(countries[i]);
    }
    i++
}console.log(countriesWithLand)

//7. Extract all the countries containing only four characters from the countries array and print it as array
let fourChar = [];
for(let i = 0; i < countries.length; i++){
    let countryLength = countries[i];
    if(countryLength.length === 4){
        fourChar.push(countryLength);
    }else{
        console.log('no such country');
    }
}console.log(fourChar)

//8. Extract all the countries containing two or more words from the countries array and print it as array
let overTwoChar = [];
for(let i = 0; i < countries.length; i++){
    let countryLength = countries[i];
    if(countryLength.length >= 2){
        overTwoChar.push(countryLength);
    }else{
        console.log('no such country');
    }
}

//9. Reverse the countries array and capitalize each country and stored it as an array
let reversedCountry = countries.reverse();
let capitalized = [];
for(let i = 0; i < countries.length; i++){
    let capital = countries[i].toUpperCase();
    capitalized.push(capital);
}console.log(capitalized)













