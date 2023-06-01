//1. Explain the difference between forEach, map, filter, and reduce.

//i. forEach: is used to iterate an array element. it doesn't return anything. it takes a call back function, with elements,
//index parameter and te array itself.

//ii. map: is used to iterate and modify the elements in an array. it takes a call back function, with elements,
//index and the array itself, then it returns the newly modified array.

//iii. filter: is used to filter our items which fulfill certain conditions and return a new array.

///iv. reduce: takes a callback fuction, an accumulator, a currentindex and the initial index parameter
//and then it returns a sinlgevalue after goinng through iteration conditions.

//2. Define a callback function before you use it in forEach, map, filter or reduce.
const callback = function (){

}
const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
//3. Use forEach to console.log each country in the countries array.
countries.forEach((callback) => {
  console.log(callback);
})

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
//4. Use forEach to console.log each name in the names array.
names.forEach((callback) => console.log(callback))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//5. Use forEach to console.log each number in the numbers array.
numbers.forEach(callback => console.log(callback));

//6. Use map to create a new array by changing each country to uppercase in the countries array.
const newCountriesArray = countries.map((callback) => callback.toUpperCase())
console.log(newCountriesArray);

//7. Use map to create an array of countries length from countries array.
const countriesLengthArr = countries.map((callback) => callback.length)
console.log(countriesLengthArr);

//8. Use map to create a new array by changing each number to square in the numbers array
const squareNumber = numbers.map((callback) => callback * callback)
console.log(squareNumber)

//9.Use map to change to each name to uppercase in the names array
const uppercaseNames = names.map((callback) => callback.toUpperCase());
console.log(uppercaseNames);

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
//10. Use map to map the products array to its corresponding prices.
const productsPrices = products.map((callback) => {
    return `${callback.product}: ${callback.price}`
})
console.log(productsPrices);

//11. Use filter to filter out countries containing land.
const countriesContainingLand = countries.filter((callback) => callback.includes('land'))
console.log(countriesContainingLand);

//12. Use filter to filter out countries having six character.
const sixCharCountries = countries.filter((callback) => callback.length === 6)
console.log(sixCharCountries);

//13. Use filter to filter out countries containing six letters and more in the country array.
const sixOrMoreCharCountries = countries.filter((callback) => callback.length >= 6)
console.log(sixOrMoreCharCountries);

//14. Use filter to filter out country start with 'E';
const startWithE = countries.filter((callback) => callback.startsWith('E'))
console.log(startWithE);

//15. Use filter to filter out only prices with values.
const priceWithValues = products.filter((callback) => {
     return callback.price > 0
})
console.log(priceWithValues);

//16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr){
   return arr.filter((array) => typeof(array) === 'string');
}
console.log(getStringLists(['book', 4, 'trueest']));

//17. Use reduce to sum all the numbers in the numbers array.
const sumAllNumbers = numbers.reduce((total, num) => total + num ,0)
console.log(sumAllNumbers);

//18. Use reduce to concatenate all the countries and to produce this sentence:
//Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const concatSentence = countries.reduce((sentence,country, index) => {
   if(index === 0){
    return country;
   }  else if(index === countries.length- 1){
    return sentence + ', and ' + country;
   } else{
    return sentence + ', ' + country
   }
},'')
console.log(concatSentence)

//19. Explain the difference between some and every
//some: is an array methd that checks if some of the elements in an array are similar in one aspect. it returns a boolean.
//every: is an array method that checks if every element in an array is similar in one aspect. it returns a boolean.

//20. Use some to check if some names' length greater than seven in names array
const someNamesLength = names.some((callback) => callback.length > 7)
console.log(someNamesLength)

//21. Use every to check if all the countries contain the word land
const everyLand = countries.every((callback) => callback.includes('land'))
console.log(everyLand);

//22. Explain the difference between find and findIndex.
//find: is an array method that returns the first element which satisfies the condition.
//findIndex: is a array method that returns the index of the first element that satisfies the condition.

//23. Use find to find the first country containing only six letters in the countries array
const firstSixCharCountry = countries.find((callback) => callback.length === 6);
console.log(firstSixCharCountry);

//24. Use findIndex to find the position of the first country containing only six letters in the countries array
const indexOffirstSixCharCountry = countries.findIndex((callback) => callback.length === 6);
console.log(indexOffirstSixCharCountry);

//25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayIndex = countries.findIndex((callback) => callback === 'Norway')

if(norwayIndex !== -1){
        console.log(`Norway is at position ${norwayIndex}`);
    }else{
        console.log(`Norway does not exist in the array`);
    }

//26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaIndex = countries.findIndex((callback) => callback === 'Russia')

if(russiaIndex !== -1){
        console.log(`Russia is at position ${russiaIndex}`);
   } else{
        console.log(`Russia does not exist in the array`);
  }
