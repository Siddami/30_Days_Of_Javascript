//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of JavaScript';

//2. Print the string on the browser console using console.log()
console.log(challenge);

//3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//4. Change all the string characters to capital letters using toUpperCase() method
let upperCase = challenge.toUpperCase();
console.log(upperCase);

//5. Change all the string characters to lowercase letters using toLowerCase() method
let lowerCase = challenge.toLowerCase();

//6. Cut (slice) out the first word of the string using substr() or substring() method
//substr()
let fWordSlice = challenge.substr(0,3);
console.log(fWordSlice);

//substring()
let firstWordSlice = challenge.substring(0,3);
console.log(firstWordSlice);

//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let phraseSlice = challenge.substring(3);
console.log(phraseSlice);

//8. Check if the string contains a word Script using includes() method
let checker = challenge.includes('Script');
console.log(checker);

//9.Split the string into an array using split() method
let arrSplit = challenge.split();
console.log(arrSplit);

//10. Split the string 30 Days Of JavaScript at the space using split() method
let splitAtSpace = challenge.split(' ');
console.log(splitAtSpace);

//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let softwareCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let toArray = softwareCompanies.split(',');
console.log(toArray);

//12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let replacement = challenge.replace('JavaScript', 'Python');
console.log(replacement);

//13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let characterAtIndex = challenge.charAt(15);
console.log(characterAtIndex);

//14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let characterAtString = challenge.charCodeAt('J');
console.log(characterAtString);

//15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let findCharIndex = challenge.indexOf('a');
console.log(findCharIndex);

//16.  Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let findLastIndex = challenge.lastIndexOf('a');
console.log(findLastIndex);

//17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let sentenceBIndex = sentence.indexOf('because');
console.log(sentenceBIndex);

//18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentenceLastIndex = sentence.lastIndexOf('because');
console.log(sentenceLastIndex);

//19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let useSearch = sentence.search('because');
console.log(useSearch);

//20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let whiteSpaceDel = challenge.trim(' ');
console.log(whiteSpaceDel);

//21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'));

//22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('Script'));

//23. Use match() method to find all the a’s in 30 Days Of JavaScript
let findAs = challenge.match('a');
console.log(findAs);

//24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let word1 = '30 Days of';
let word2 = ' JavaScript';
let concatenation = word1.concat(word2);
console.log(concatenation)

//25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));





