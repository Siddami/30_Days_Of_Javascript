/*1.  Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.*/
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

/* 2. Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."*/
console.log("\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"");

//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ten = '10';
 console.log(typeof parseInt(ten));
 let second = 10;
 console.log(typeof 10);
 console.log(typeof parseInt(ten) === typeof (second));

//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let floatType = parseFloat("9.8");
let changeRound = Math.round(floatType);
let Ten = 10;
console.log(changeRound === Ten);

//5. Check if 'on' is found in both python and jargon
let firstWord = 'python';
let secondWord = 'jargon';

let onSearch = firstWord.includes('on');
let onSearch2 = secondWord.includes('on');

console.log(onSearch, onSearch2);

//6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let aSentence = 'I hope this course is not full of jargon.';
console.log(aSentence.includes('jargon'));

//7. Generate a random number between 0 and 100 inclusively.
let randomNum = Math.floor(Math.random() * 101);
let fromZeroToHundred = randomNum;

console.log(fromZeroToHundred);

//8. Generate a random number between 50 and 100 inclusively.
let from50ToHundred = Math.floor(Math.random() * 51 + 50) ;

console.log(from50ToHundred);

//9. Generate a random number between 0 and 255 inclusively.
let fromZerToHundred = Math.floor(Math.random() * 255) ;

console.log(fromZeroToHundred);

//10. Access the 'JavaScript' string characters using a random number.
let stringWord = 'JavaSript';
let lengthofString = stringWord.length;
console.log(lengthofString)// did this to find out the string length.
let randomNumber = Math.floor(Math.random() * 10);
let printIndexRandomly = stringWord[randomNumber];
console.log(printIndexRandomly) ;

//11. Use console.log() and escape characters to print the following pattern.
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

//12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentences = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentences.substr(31, 23));

