//1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age
let sortedAges = ages.sort();
console.log(sortedAges)
minAge = sortedAges[0];
maxAge = sortedAges[9];
console.log(minAge, maxAge)
//Find the median age(one middle item or two middle items divided by two)
//Find the average age(all items divided by number of items)
const average = (ages) => ages.reduce((a, b) => a + b) / ages.length;
let avg= (average([19,22,19,24,20,25,26,24,25,24]));
console.log(avg)

//Find the range of the ages(max minus min)
let range = maxAge - minAge;
console.log(range);

//Compare the value of (min - average) and (max - average), use abs() method 1.
//Slice the first ten countries from the countries array;
let comp1 = Math.abs(minAge - avg);
let comp2 = Math.abs(maxAge - avg);
console.log(comp1)
console.log(comp2)
