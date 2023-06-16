//1. Calculate the total annual income of the person from the following text.
//‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const earningStatement = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const earnsArray = earningStatement.match(/\d+/g);
console.log(earnsArray)
let sumOfEarnings = 0;
for(const earning of earnsArray){
    sumOfEarnings+= parseInt(earning);
}
console.log(sumOfEarnings);

//2.The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction,
// 0 at origin, 4 and 8 in the positive direction.
//Extract these numbers and find the distance between the two furthest particles.
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
const distance = 12;

// Create a regex pattern to match the desired numbers
const pattern = /-?\d+/g;

// Extract the numbers from the points array using regex
const extractedNumbers = points.join(' ').match(pattern).map(Number);

// Filter out numbers less than or equal to 0 and greater than distance
const filteredNumbers = extractedNumbers.filter(num => num > 0 && num <= distance);

// Find the minimum and maximum values
const min = Math.min(...filteredNumbers);
const max = Math.max(...filteredNumbers);

// Calculate the distance between the two furthest particles
const furthestDistance = max - min;

console.log(furthestDistance);

//3. Write a pattern which identify if a string is a valid JavaScript variable
const stringPattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
(function isStringValid(variable){
    console.log(stringPattern.test(variable))
})('first-Name')
