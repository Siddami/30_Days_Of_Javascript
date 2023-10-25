/*1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive'
but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.*/
let agePrompt = parseInt(prompt('Enter your age'));
if (agePrompt >= 18){
    console.log('You are old enough to drive');
}else{
    console.log(`wait for ${18 - agePrompt} years`);
}

/*2. Compare the values of myAge and yourAge using if … else.
Based on the comparison and log the result to console stating who is older (me or you).
Use prompt(“Enter your age:”) to get the age as input.*/
let yAge = parseInt(prompt('Enter your age'));
let mAge = parseInt(prompt('Enter your age'));
if(mAge > yAge){
    console.log(`I am ${mAge - yAge} years older than you`);
}
else if(mAge === yAge){
    console.log('We are of the same age');
}
else{
    console.log(`You are ${yAge - mAge} years older than me`)
}


/*3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.*/

//if else
let a = 20;
let b = 10;

if(a > b){
    console.log(`${a} is greater than ${b}`);
}
else{
    console.log(`${a} is less than ${b}`);
}

//ternary operator
a > b
? console.log(`${a} is greater than ${b}`)
: console.log(`${a} is less than ${b}`);


// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num = 2;
if(num % 2 === 0){
    console.log(`${num} is an even number`);
}else{
    console.log(`${num} is an odd number`);
}
