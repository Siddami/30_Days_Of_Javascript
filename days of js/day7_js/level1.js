//1. Declare a function fullName and it print out your full name.
(function fullName(){
    console.log('Abdulkareem Yetunde Siddiqat')
})();

//2. Declare a function fullName and now it takes firstName, 
//lastName as a parameter and it returns your full - name.
function FullName(firstName, lastName){
   firstName = 'Yetunde';
   lastName = 'Abdulkareem';
   return `${firstName} ${lastName}`
};
console.log(FullName());

//3. Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(2,3));

//4. An area of a rectangle is calculated as follows: area = length x width. 
//Write a function which calculates areaOfRectangle.
(function areaOfRectangle(length, width){
    let area = length * width;
    console.log(area);
})(4,5);

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). 
//Write a function which calculates perimeterOfRectangle.
const perimeter = function (length, width){
    return 2 * (length + width)
}
console.log(perimeter(2,4));

//6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. 
//Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length = 5, width = 10, height = 3) =>{
    let volume = length * width * height;
    return volume;
}
console.log(volumeOfRectPrism());
console.log(volumeOfRectPrism(3, 6, 10));

//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (r = 2) => Math.PI * r * r;
console.log(areaOfCircle());

//8. Circumference of a circle is calculated as follows: circumference = 2πr. 
//Write a function which calculates circumOfCircle

function circumOfCircle(r = 5){
    return 2 * Math.PI * r;
}
console.log(circumOfCircle());

//9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = (mass = 10, volume = 5) => mass/volume;
console.log(density());

//10. Speed is calculated by dividing the total distance 
//covered by a moving object divided by the total amount of time taken. 
//Write a function which calculates a speed of a moving object, speed.

function speed(distance, time){
    return distance/time;
}
console.log(speed(3, 2));

//11. Weight of a substance is calculated as follows: weight = mass x gravity. 
// //Write a function which calculates weight.
const weight = (function (mass = 5, gravity = 9.8){
    console.log(mass * gravity)
})();

//12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
//Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(oC){
    oF = (oC * 9/5);
    return oF;
}console.log(convertCelsiusToFahrenheit(5));

//13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
//Write a function which calculates bmi. 
//BMI is used to broadly define different weight groups in adults 20 years old or older.
//Check if a person is underweight, normal, overweight or obese based the information given below.

const bmiCalculator = ((age, weight, height) =>{
    
    heightInMeters = height / 100; 
    
    let bmi = weight / (heightInMeters * heightInMeters);
    
    let category;
    
    if (age >= 20){
      if (bmi < 18.5){
        category = 'underweight';
      }else if(bmi >= 18.5 && bmi < 25){
        category = 'normal';
      }else if(bmi >= 25.0 && bmi < 30){
        category = 'overweight';
      }else{
        category = 'Obese';
      }
    }else{
    console.log('cannot check bmi for age below 20');
    }
console.log(`bmi: ${bmi}, category: ${category}`);
})(30, 50, 160);

//14. Write a function called checkSeason, 
//it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month){
    let season;
    switch(month){
        case "December":
        case "January":
        case "February":
             season = "Winter";
             break;
        case "March":
        case "April":
        case "May":
             season = "Spring";
             break;
        case "June":
        case "July":
        case "August":
            season = "Summer";
        case "Septemer":
        case "October":
        case "November":
            season = "Autumn";
    }
    return (`The season for ${month} is ${season}`)
}
console.log(checkSeason('January'));

//15. Math.max returns its largest argument. 
//Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (function (a,b,c){
    maxNum = Math.floor(Math.max(a, b, c));
    console.log(maxNum);
})(2,5,6);
