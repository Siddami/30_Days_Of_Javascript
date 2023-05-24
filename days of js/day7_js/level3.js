//1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. 
//It doesn’t take any parameter but it takes two inputs using prompt().
//One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// let characters = 'ABDCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
// function userIdGeneratorByUser(){
//      let userId = [];
//      let length = parseInt(prompt('enter number of characters'));
//      let count = parseInt(prompt('enter number of ids to generate'));

//     if(isNaN(length) || isNaN(count)){
//       alert('Invalid input, please enter valid numbers')
//       return;
//     }
//      for(let i = 0; i < count; i++){
//         const randomId = Math.floor(Math.random() * length);
//         userId += characters[randomId].toUpperCase();;
//      }
//      console.log(userId);
// };
// console.log(userIdGeneratorByUser())

//2. Write a function name rgbColorGenerator and it generates rgb colors.
(function rgbColorGenerator(){
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  if(red < 10){
    red = '0' + red;
  } 
  if(blue < 10){
    blue = '0' + blue;
  } 
  if (green < 10){
    green = '0' + green;
  }
  
  console.log(`rgb(${red},${blue},${green})`); 
})();

//3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(count){
  let arrHex = [];

  for(let i = 0; i < count; i++){
    let color ='#' + Math.floor(Math.random() * 16778224).toString(16);
    arrHex.push(color);
  } 
    
  console.log(arrHex);
}
arrayOfHexaColors(5);

//4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
const arrayOfRgbColors = (function (count){
  let rgbArray = [];
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  if(red < 10){
    red = '0' + red;
  } 
  if(blue < 10){
    blue = '0' + blue;
  } 
  if (green < 10){
    green = '0' + green;
  }
  for(let i = 0; i < count; i++){
    let rgbColor = `rgb(${red},${green},${blue})`;
    rgbArray.push(rgbColor);
  }
  console.log(rgbArray)
})(3);

//5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
const convertHexaToRgb = (function (hexa){
   hexa = hexa.replace('#', '');

   let decimalValue = parseInt(hexa, 16);

   let red = (decimalValue >> 16) & 255;
   let green = (decimalValue >> 8) & 255;
   let blue = decimalValue & 255;

   rgb = `rgb(${red},${green},${blue})`;
   console.log(rgb);
})("#ff5ee")

//6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(rgb){
   let rgbValues = rgb.match(/\d+/g);
   let red = parseInt(rgbValues[0]);
   let green = parseInt(rgbValues[1]);
   let blue = parseInt(rgbValues[2]);

   let hexRed = red.toString(16).padStart(2, '0');
   let hexGreen = green.toString(16).padStart(2, '0');
   let hexBlue = blue.toString(16).padStart(2, '0');

  let hexa = `#${red}${green}${blue}`
  console.log(hexa);
};

convertRgbToHexa('rgb(50,20,50)')

//7. Write a function generateColors which can generate any number of hexa or rgb colors.
const generateColors = ((hexCount, rgbCount) =>{
  let arrHex = [];
  let rgbArray = [];
  if(hexCount){
  for(let i = 0; i < hexCount; i++){
    let color ='#' + Math.floor(Math.random() * 16778224).toString(16);
    arrHex.push(color);
  } console.log(arrHex);
}

if(rgbCount){
let red = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
if(red < 10){
  red = '0' + red;
} 
if(blue < 10){
  blue = '0' + blue;
} 
if (green < 10){
  green = '0' + green;
}
for(let i = 0; i < rgbCount; i++){
  let rgbColor = `rgb(${red},${green},${blue})`;
  rgbArray.push(rgbColor);
}console.log(rgbArray);
}
})(2,2);

//8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array){
  const shuffledArray = array.slice();

  for(let i = shuffledArray.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i * 1));

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
console.log(shuffleArray([2,6,9,10,'baby', 'ola']));

//9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n){
  if ( n === 0 || n === 1){
    return 1;
  }

  return n * factorial(n - 1);
}
console.log(factorial(8))

//10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

const isEmpty = (function (input){
   if(input.length === 0){
    console.log('input is empty');
   }else{
    console.log(input);
   }
})('');

//11. Call your function sum, it takes any number of arguments and it returns the sum.
const sum = ((...num) => {
     let sums = 0;
    for(const n of num){
      sums += n;
     }
     console.log(sums)
})(5,6,7,4,10)

//12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. 
//Check if all the array items are number types. 
//If not give return reasonable feedback.

const sumOfArrayItems = function (arr){
  let sum = 0;
  for(const item of arr){
     if(typeof item !== 'number'){
        return 'Array contains non-number items'
     }
  }
  for(const item of arr){
    sum += item;
  }
  return sum;
}
console.log(sumOfArrayItems([3,4,5,]))

//13. Write a function called average, it takes an array parameter and returns the average of the items. 
//Check if all the array items are number types. 
//If not give return reasonable feedback.
function average (array){
  let avrg;
  let sum = 0;
   
  for(const items of array){
    if(typeof items !== 'number'){
      return 'Array contains non-number items'
    }
  }
  
  for(const items of array){
    sum += items
  }
  avrg = sum / array.length;
  return avrg;

}
console.log(average([2,3,4,8]))

//14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. 
//If the array length is less than five it return 'item not found'.

const modifyArray = (array) => {
      if(array.length < 5){
      return 'not an array item';
    }
    array[4] = 'modified';
  
    return array;
}
console.log(modifyArray([1,2,3,4,5]))

//15. Write a function called isPrime, which checks if a number is prime number.
const isPrime = function (num) {
 if (num <= 1){
  return false;
 }
 for(let i = 2; i <= Math.sqrt(num); i++){
  if(num % i === 0){
    return false;
  }
  return true;
 }
};console.log(isPrime())

//16. Write a functions which checks if all items are unique in the array.
function areAllItemsUnique (array){
  let encountered = {};

  for(let i = 0; i < array.length; i++){
    const item = array[i];

    if (encountered[item]){
      return false;
    }

    encountered[item] = true;
  }

  return true;
}
console.log(areAllItemsUnique([3,5]))

//17. Write a function which checks if all the items of the array are the same data type.

function areItemsOfSameType (arr){
  if(arr.length === 0){
    return true;
  }

  const fristType = typeof array[0];

  for(let i = 1; i < arr.length; i++){
    if(typeof array[i] !== fristType){
      return false;
    }
  }

  return true;
}
console.log(areAllItemsUnique([2,,3,5,'2']))

//18. JavaScript variable name does not support special characters or symbols except $ or _. 
//Write a function isValidVariable which check if a variable is valid or invalid variable.

function isValidVariable(variableName) {
  // Check if the variable name is a string
  if (typeof variableName !== 'string') {
    return 'Invalid variable: not a string';
  }

  // Check if the variable name starts with a letter, underscore, or dollar sign
  if (!/^[a-zA-Z_$]/.test(variableName)) {
    return 'Invalid variable: must start with a letter, underscore, or dollar sign';
  }

  // Check if the variable name contains only letters, digits, underscores, or dollar signs
  if (!/^[a-zA-Z0-9_$]+$/.test(variableName)) {
    return 'Invalid variable: can only contain letters, digits, underscores, or dollar signs';
  }

  // Check if the variable name is a reserved keyword in JavaScript
  const reservedKeywords = [
    'break', 'do', 'instanceof', 'typeof', 'case', 'else', 'new', 'var', 'catch',
    'finally', 'return', 'void', 'continue', 'for', 'switch', 'while', 'debugger',
    'function', 'this', 'with', 'default', 'if', 'throw', 'delete', 'in', 'try'
  ];

  if (reservedKeywords.includes(variableName)) {
    return 'Invalid variable: reserved keyword';
  }

  // The variable name is valid
  return 'Valid variable';
}
console.log(isValidVariable(''))

//19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
const sevenRandomNumbers = (function (){
  let array = new Array();
for(let i = 0; i <= 7; i++){
    let random = Math.floor(Math.random() * 10);
    if(!array.includes(random)){
        array.push(random)
    }
}console.log(array);
})();

//20. Write a function called reverseCountries, 
//it takes countries array and first it copy the array and returns the reverse of the original array
const countries = ['Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia',
'Finland',
'Germany',
'Hungary',
'Ireland',
'Japan',
'Kenya']
const reverseCountries = (() => {
   let copyArray = [];
   for(let i = countries.length; i > 0 ; i--){
     copyArray.push(countries[i]);
   }
   console.log(copyArray);
})()


























