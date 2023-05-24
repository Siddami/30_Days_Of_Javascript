//1. Linear equation is calculated as follows: ax + by + c = 0. 
//Write a function which calculates value of a linear equation, solveLinEquation.

const solveLinEquation = ((a,x,b,c) => {
    y = (-a * x - c) / b;
    console.log(y);
})(3,4,7,5);

//2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
//Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

(function solveQuadEquation(a, b, c){
  let discriminant = b * b - 4 * a * c;
  let solution = [];

  if(discriminant > 0){
     sqrtDiscriminant = Math.sqrt(discriminant);
     let x1 = (-b + sqrtDiscriminant)/ (2 * a);
     let x2 = (-b - sqrtDiscriminant)/ (2 * a);
     solution.push(x1, x2);
  }else if (discriminant === 0){
    let x = -b/ (2 *a);
    solution.push(x);
  }
  console.log(solution)
})()

//3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = ((array) => {
    for(let i = 0; i < array.length; i++){
          console.log(array[i])
    }
})([1,2,5,6]); 

//4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
(function showDateTime (){
  const now = new Date();
  let month = now.getMonth();
  if(month < 10){
    month = '0' + month
  }
  let year = now.getFullYear();
  let day = now.getDay();
  if(day < 10){
    day = '0' + day;
  }
  let hour = now.getHours();
  if (hour < 10){
    hour = '0' + hour
  }
  let minute = now.getMinutes();
  if (minute < 10){
    minute = '0' + minute
  } 
  console.log(`${day}/${month}/${year} ${hour}:${minute}`)
})();

//5. Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x, y) => {
   let arr = []
   arr.push(x, y);
   arr.reverse();
   

   return `x=${arr[0]} and y=${arr[1]}`;
}
console.log(swapValues(5,7));

//6. Declare a function name reverseArray. 
//It takes array as a parameter and it returns the reverse of the array (don't use method).
const reverseArray = (function(arr){
      for(let i = arr.length ; i >= 0; i--){
        console.log(arr[i]);
      }
})([2,3,4,5,6,7])

//7. Declare a function name capitalizeArray. 
//It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = ((arr) => {
    for(const a of arr){
        let upper = a.toUpperCase();
        console.log(upper);
    }
})(['always', 'happy', 'baby'])

//8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem = (...item) => {
    let array = [];
    array.push(...item)

    return array;
}
console.log(addItem(2,3,4,5,'ade','ola'));

//9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
let itemArray = ['cookies', 'candy', 'chocolate', 'icecream', 'milk', 'smoothy']
function removeItem(index){
      let removed = itemArray.slice(index)
      return removed;
}
console.log(removeItem(3))

//10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = ((...numbers) => {
    let sum = 0;
    for(const items of numbers){
        sum += items;
    }
    console.log(sum)
})(2,4,9);

//11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = ((...odds) => {
    let sumOfOdds = 0;
    for(const items of odds){
        if (items % 2 === 1){
            sumOfOdds += items;
        }
    }
    console.log(sumOfOdds)
})(2,3,5)

//12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEvens = ((...even) => {
    let sumOfEven = 0;
    for(const items of even){
        if(items % 2 === 0){
            sumOfEven += items;
        }
    }
    console.log(sumOfEven)
})(2,1,7,6);

//13. Declare a function name evensAndOdds . 
//It takes a positive integer as parameter and it counts number of evens and odds in the number.
(function evensAndOdds(){
    let evens = 0;
    let odds = 0;
    for(const items of arguments){
        if(items >= 0){
            if(items % 2 === 0){
                evens++;
            }else if(items % 2 === 1){
                odds++;
            }
        }else{
            console.log('You can only input positive integers as arguemnts.');
        }
    }
    console.log(`The number of even numbers are ${evens}.
    The number of odd numbers are ${odds}.`)
})(2,3,5,7,9,10);

//14. Write a function which takes any number of arguments and return the sum of the arguments
const sumOfArgs = (function(){
    let sum = 0;
    for(const args of arguments){
        sum += args;
    }
    console.log(sum)
})(3,4,10,25,4,1); 

//15. Write a function which generates a randomUserIp.
const randomUserIp = (name) => {
   let userIp1 = Math.floor(Math.random() * 255);
   let userIp2 = Math.floor(Math.random() * 255);
   let userIp3 = Math.floor(Math.random() * 255);
   let userIp4 = Math.floor(Math.random() * 255);
   return (`hello ${name}, your user Ip is: ${userIp1}.${userIp2}.${userIp3}.${userIp4}.`)
}
console.log(randomUserIp('Yetunde'))

//16. Write a function which generates a randomMacAddress
const randomMacAddress = (function (){
    let macAddress = "" ;
    let length = 6;
    for(let i = 0; i < length; i++){
        const randomHexDigit = Math.floor(Math.random() * 256).toString(17);
        macAddress += randomHexDigit.padStart(2, "0");

        if(1 < 5){
            macAddress += ":";
        }
    }
    console.log(macAddress.toUpperCase());
})();

//17. Declare a function name randomHexaNumberGenerator. 
//When this function is called it generates a random hexadecimal number. 
//The function return the hexadecimal number.

const randomHexaNumberGenerator = (() => {
    let hexadecimal = "" ;
    let length = 6;
    for(let i = 0; i < length; i++){
        const randomHexDigit = Math.floor(Math.random() * 16).toString(16);
            hexadecimal += randomHexDigit;
    }
    console.log(hexadecimal)
})();

//18. Declare a function name userIdGenerator. When this function is called it generates seven character id. 
//The function return the id.
let characters = 'ABDCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
(function userIdGenerator(length){
     let userId = '';
     for(let i = 0; i < 7; i++){
        const randomId = Math.floor(Math.random() * length);
        userId += characters[randomId].toUpperCase();;
     }
     console.log(userId);
})(8)













