// //1.  Develop a small script which generate any number of characters random id:
// let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
// let charNum = ''
// let length = 10;
// for(let i = 0; i < length; i++){
//     let randomIndex = Math.floor(Math.random() * char.length)
//     charNum += char[randomIndex] 
// }console.log(charNum)

// //2. Write a script which generates a random hexadecimal number.
// let hexLength = 6;
// let result = ''

// for(let i = 0; i < hexLength; i++){
//     let randomDigit = Math.floor(Math.random() * 16)
//     let hexDigit = randomDigit.toString(16);
//     result += hexDigit
// }console.log(result);

// //3. Write a script which generates a random rgb color number.
// let red = Math.floor(Math.random() * 256);
// let blue = Math.floor(Math.random() * 256);
// let green = Math.floor(Math.random() * 256);

// console.log(`rgb(${red},${blue},${green})`);

//4. Using the above countries array, create the following new array.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
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

// // let rel = countries.toString()
// // let upper = rel.toUpperCase();
// // let newArray = upper.split(",")
// // console.log(newArray);

// //5. Using the above countries array, create an array for countries length'.
// let countriesLength = countries.map(countries => countries.length);
// console.log(countriesLength)

// //6. Use the countries array to create the following array of arrays:
// let arrOfArr = []
// let abbr = ["ALB","BOL","CAN","DEN","ETH","FIN","GER","HUN","IRE","JAP","KEN"]
// for(let i = 0; i < countries.length; i++){
//     const country = countries[i];
//     const countArr = [country, abbr[i] ,countriesLength[i]];
//     arrOfArr.push(countArr)
// }
// console.log(arrOfArr)

//7. In above countries array, check if there is a country or countries containing the word 'land'. 
//If there are countries containing 'land', print it as array. 
//If there is no country containing the word 'land', print 'All these countries are without land'.
// let arrNew =[];
// for (let i = 0; i < countries.length; i++){
//      if(countries[i].includes('land') === true){
//         arrNew.push(countries[i])
//      }
// }
// console.log(arrNew)

// //8. In above countries array, check if there is a country or countries end with a substring 'ia'. 
// //If there are countries end with, print it as array.
// //If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// let endArr = [];
// for (let i = 0; i < countries.length; i++){
//     if(countries[i].includes('ia') === true){
//        endArr.push(countries[i])
//     }
// }
// console.log(endArr)

// //9. Using the above countries array, find the country containing the biggest number of characters.
// let longestStr = ''
// for (let i = 0; i < countries.length; i++){
//     let currentStr = countries[i];
//     if(currentStr.length > longestStr.length){
//         longestStr = currentStr;
//     }
// }console.log(longestStr);

// //10. Using the above countries array, find the country containing only 5 characters.
// let strLen = [];
// for (let i = 0; i < countries.length; i++){
//     let currStr = countries[i]; 
//     if (currStr.length === 5){
//        strLen.push(countries[i]);
//     }
// }
// // console.log(strLen);

// //11. Find the longest word in the webTechs array
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
// let webStr = '';
// for(let i = 0; i < webTechs.length; i++){
//     let crrWebStr = webTechs[i];
//     if (crrWebStr.length > webStr.length){
//         webStr = crrWebStr;
//     }
// }console.log(webStr)

// //12. Use the webTechs array to create the following array of arrays:
// // [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// let webArray = [];
// for(let i = 0; i < webTechs.length; i++){
//     let webEach = webTechs[i];
//     let webLength = webTechs[i].length;
//     webArray.push([webEach, webLength]);
// }console.log(webArray)

// //13. An application created using MongoDB, Express, React and Node is called a MERN stack app. 
// //Create the acronym MERN by using the array mernStack
// const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
// let abbr = ''
// for(let i = 0; i < mernStack.length; i++){
//    let eachStack = mernStack[i];
//    abbr += eachStack[0];   
// }console.log(abbr)

// //14. Iterate through the array,
// // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
// const newWeb = [];
// for(const web of webTechs){
//     newWeb.push(web)
// }console.log(newWeb)

//15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// let fruit = ['banana', 'orange', 'mango', 'lemon'];
// for(let i = fruit.length - 1; i >= 0; i--){
//    console.log(fruit[i])   
// }

//16. Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  for(let i = 0; i < fullStack.length; i++){
    for(let j = 0; j < fullStack[i].length; j++){
        console.log(fullStack[i][j]);
    }
  }






