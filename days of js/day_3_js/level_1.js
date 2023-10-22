/*1.Declare firstName, lastName, country, city, age, isMarried, year variable and
assign value to it and use the typeof operator to check different data types.*/

let firstName = 'Yetunde' ,lastName = 'Abdulkareem', country = 'Nigeria', age = 24, isMarried = true;
console.log(typeof(firstName),
            typeof(lastName),
            typeof(country),
            typeof(age),
            typeof(isMarried));

//2. Check if type of '10' is equal to 10

let stringType = parseInt('10');
console.log(typeof(stringType) === typeof(10));

//3. Check if parseInt('9.8') is equal to 10

let rounding = Math.round(parseFloat('9.8'));
console.log(rounding === 10);

/*4. Boolean value is either true or false.
Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.*/
let false1 = '' == 1, false2 = 0 > 1 , false3 = false
let truth1 = true, truth2 = 2 < 5, truth3 = 5 == 5

console.log(false1, false2, false3)
console.log(truth1, truth2, truth3)
/*5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.*/

let truthy1 = 4 > 3, truthy2 = 4 == 4, truthy3 = 4 === 4, truthy4 = 4 !== '4', truthy5 = 4 == '4';
let falsy1 = 4 < 3, falsy2 = 4 <= 3, falsy3 = 4 != 4, falsy4 = 4 !== 4, falsy5 = 4 === '4', falsy6 = 4 != '4';

console.log(truthy1, truthy2, truthy3, truthy4, truthy5);
console.log(falsy1, falsy2, falsy3, falsy4, falsy5, falsy6);

let wordLength = 'python', secWordLength = 'jargon';
console.log(wordLength.length !== secWordLength.length);

/* Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python*/

let truthy6 = 4 > 3 && 10 < 12, truthy7 = 4 > 3 || 10 < 12, truthy8 = 4 > 3 || 10 > 12, truthy9 = !(4 < 3), truthy10 = !(false) , truthy11 = !(4 > 3 && 10 > 12), truthy12 = !(4 === '4');
let falsy7 = 4 > 3 && 10 > 12, falsy8 = !(4 > 3), falsy9 = !(4 > 3 && 10 < 12);

console.log(truthy6, truthy7, truthy8, truthy9, truthy10, truthy11, truthy12);
console.log(falsy7, falsy8, falsy9);

console.log(!(wordLength.includes('on')), !(secWordLength.includes('on')) );

/*Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.*/

const now= new Date()
//year today
let yearToday = now.getFullYear();
console.log(yearToday);
//month today
let monthToday = now.getMonth();
console.log(monthToday)
//date today
let dateToday = now.getDate();
console.log(dateToday)
//day today
let dayToday = now.getDay();
console.log(dayToday);
//hours now
let hoursNow = now.getHours();
console.log(hoursNow);
//minutes now
let minutesNow = now.getMinutes();
console.log(minutesNow);
//seconds elapsed
let secondsElapsed = Date.now();
console.log(secondsElapsed);
