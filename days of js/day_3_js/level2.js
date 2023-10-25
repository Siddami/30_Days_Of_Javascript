//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let b = parseInt(prompt('Enter Base'));
let h = parseInt(prompt('Enter Height'));

let area = 0.5 * b * h;
console.log(area);

//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = parseInt(prompt('Enter side A'));
let sideB = parseInt(prompt('Enter side B'));
let sideC = parseInt(prompt('Enter side C'));

let perimeter = (sideA + sideB + sideC);
console.log(perimeter);

/*3. Get length and width using prompt and
calculate an area of rectangle
(area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))*/

let length = parseInt(prompt('Enter Length'));
let width = parseInt(prompt('Enter Width'));

let a = length * width;
let p = 2 * (length + width);
console.log(a, p);

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r = parseInt(prompt('Enter radius'));
const pi = 3.14;
let ar = pi * r * r;
let c = 2 * pi * r;
console.log(ar, c);

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2.

let y2 = 0;
let x1 = 0;
let y1 = 2 * x1 + (-2);
console.log(y1);
let x2 = 2 * y1 + (-2);
console.log(x2);
let slope = Math.floor((y2 - y1/ x2 - x1));
console.log(slope);

//6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let xOne = 2;
let xTwo = 6;
let yOne = 2;
let yTwo = 10;
let m = (yOne - yTwo)/(xOne - xTwo);
console.log(m);

//7. Compare the slope of above two questions.

console.log(slope <= m);

//8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = -2.1;
let y = (x**2 + 6*x + 9);
console.log(Math.floor(y));

/*9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?*/
let hours = parseInt(prompt('Enter hours'));
let rPerH = parseInt(prompt('Enter rate per hour'));
let rate = hours * rPerH;
console.log(rate);

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = 'Siddiqat';
let nameLength = myName.length;

if(nameLength > 7){
    console.log('Your name is Long')
}else{
    console.log('Your name is short')
}

//11. Compare your first name length and your family name length and you should get this output.

let myFirstName = 'Asabeneh';
let myLastName = 'Yetayeh';
if(myFirstName.length > myLastName.length){
    console.log('Your first name,', myFirstName,'is longer than your family name',myLastName);
}
else{
    console.log('Your family name,',myLastName,'is longer than your first name',myFirstName);
}

//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let MyAge = 50;
let YourAge = 70;
if(MyAge > YourAge){
    console.log(`I am ${MyAge - YourAge} years older than your`);
}
else{
    console.log(`you are ${YourAge - MyAge} years older than me,and i am younger than you`)
}

/*13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.*/
let birthYear = parseInt(prompt('Enter your birth year'));
let Now = new Date()
let currentYear = Now.getFullYear();
let ageNow = Now.getYear() - birthYear + 1900;
console.log(ageNow);
if(ageNow >= 18){
    console.log('You are fit to drive');
}else{
    console.log('You are not at a driving age');
}

/*14. Write a script that prompt the user to enter number of years.
Calculate the number of seconds a person can live.
Assume some one lives just hundred years*/
let numY = parseInt(prompt('Enter the number of years you have lived'));
let nowY = new Date();
let secLived = nowY.getTime(numY);
console.log(`You have lived ${secLived} seconds.`)

/*15. Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm*/
let theDate = new Date()
let theMonth = theDate.getMonth();
let theHour = theDate.getHours();
let theYear = theDate.getFullYear();
let theDay = theDate.getDay();
console.log(`${theYear}-${theMonth}-${theDay}`);
console.log(`${theDay}-${theMonth}-${theYear}`);
console.log(`${theDay}/${theMonth}/${theYear}`);
