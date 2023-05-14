//1. Declare an empty array;
let emptyArr = [];

//2. Declare an array with more than 5 number of elements
let moreElementArr = [1, 'hello', true, 20, 'hi', 24, 10];

//3. Find the length of your array
console.log(moreElementArr.length);

//4. Get the first item, the middle item and the last item of the array
let firstItem = moreElementArr[0];
let midItem = moreElementArr[3];
let lastItem = moreElementArr[7 -1];
console.log(firstItem, midItem, lastItem);

//5. Declare an array called mixedDataTypes, 
//put different data types in the array and find the length of the array. 
//The array size should be greater than 5
const mixedDataTypes = [2, 'string', true, {name: 'joy', age : 24}, 20, ['beeds', 2]];
lengthOfArr = mixedDataTypes.length;
console.log(lengthOfArr);

//6. Declare an array variable name itCompanies and assign initial values 
//Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook','Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];

//7. Print the array using console.log()
console.log(itCompanies);

//8. Print the number of companies in the array
let numOfCom = itCompanies.length;
console.log(numOfCom);

//9. Print the first company, middle and last company
let firstCom = itCompanies[0];
let midCom = itCompanies[3];
let lastCom = itCompanies[itCompanies.length - 1];
console.log(firstCom, midCom, lastCom);

//10. Print out each company
for(let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i]);
} 

//11. Change each company name to uppercase one by one and print them out
for(let i = 0; i < itCompanies.length; i++){
    let upperCase = itCompanies[i].toUpperCase();
    console.log(upperCase);
}

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
itCompanies.pop();
console.log(`${itCompanies} and Amazon are big IT companies.`);
itCompanies.push('Amazon');

//13. Check if a certain company exists in the itCompanies array. 
//If it exist return the company else return a company is not found
if(itCompanies.includes('Apple')){
    let arrIndex = itCompanies.indexOf('Apple')
    console.log(itCompanies[arrIndex]);
}else{
    console.log('Company not found');
}

//14. Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++){
    if(itCompanies[i].includes('oo')){
        let arrI = itCompanies.indexOf(itCompanies[i])
        itCompanies.splice(0, arrI);
    }else{
        console.log(itCompanies[i])
    }
}

//15. Sort the array using sort() method
let sorted = itCompanies.sort();
console.log(sorted);

//16. Reverse the array using reverse() method
let reversed = itCompanies.reverse();
console.log(reversed);

//17. Slice out the first 3 companies from the array
let firstThree = itCompanies.slice(0,3);
console.log(firstThree)

//18. Slice out the last 3 companies from the array
let lastThree = itCompanies.slice(3,7);
console.log(lastThree)

//19. Slice out the middle IT company or companies from the array
let midOne = itCompanies.slice(2, 4);
console.log(midOne)

//20. Remove the first IT company from the array
console.log(itCompanies.shift())

//21. Remove the middle IT company or companies from the array
console.log(itCompanies[6/2]);

//22. Remove the last IT company from the array
console.log(itCompanies.pop());

//23. Remove all IT companies
console.log(itCompanies.splice())

















































































