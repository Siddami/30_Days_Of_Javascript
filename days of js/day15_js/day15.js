//1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal{
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    getFullInfo(){
        const fullInfo = `The animal's name is ${this.name}, aged ${this.age}.
        It is ${this.color} in color and it has ${this.legs} legs`;
        return fullInfo;
    }
    getBasicInfo(){
        console.log(`This is ${this.name}, aged ${this.age}`);
    }
}
const animal = new Animal('Dog', 12, 'blue', 4);
const animalName = animal.name;
const animalAge = animal.age;
const animalColor = animal.color;
const animalLegs = animal.legs;
const animalFullInfo = animal.getFullInfo();
console.log(animalName, animalAge, animalColor, animalLegs)
console.log(animalFullInfo)

//2.Create a Dog and Cat child class from the Animal Class
class Dog extends Animal{
    constructor(name, age, color, legs, type, sound){
        super(name,color,legs,age)
        this.type = type
        this.sound = sound
    }
    get getSound(){
        console.log(this.sound)
    }
}
const dogClass = new Dog('Tobi', 10, 'brown', 4, 'Poodle', 'woof')
const dogFullInfo = dogClass.getFullInfo();
const dogSound = dogClass.sound;
console.log(dogSound);
console.log(dogFullInfo);

class Cat extends Animal{
    constructor(name, sound){
        super(name)
        this.sound = sound
    }
    getSound(){
        console.log(this.sound)
    }
}

const catClass = new Cat('Twinkles', 'meow');
const catFullInfo = catClass.getFullInfo();
const catSound = catClass.sound
console.log(catSound);
console.log(catFullInfo);

//Level 2
//1. Override the method you create in Animal class
Cat.prototype.getBasicInfo = function(){
    return(`This is ${this.name}. It is a cat, aged ${this.age}`)
}
let newCat = new Cat('star', 'meow');
console.log(newCat.getBasicInfo())


//level 3
/*Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).
In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.
You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class.
Check the output below.
*/
let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
class Statistics{
    constructor(arg){
        this.arg = arg
    }
   get count(){
    let count = 0;
    for(let i = 0; i < this.arg.length; i++){
        count++;
    }
    return count;
   }

   get sum(){
     let sum = 0;
     for(let i = 0; i < this.arg.length; i++){
        sum += this.arg[i];
     }
     return sum;
   }

   get min(){
        let min= this.arg[0];
        for(let i = 0; i < this.arg.length; i++){
           if(this.arg[i] < min){
            min = this.arg[i];
           }
        }
        return min;
   }

   get max(){
     let max = this.arg[0];
     for(const num of this.arg){
        if(num > max){
            max = num
        }
     }
     return max;
   }

   get mean(){
       let mean;
       mean = this.sum / this.count
       return mean;
   }

   get median(){
       let median;
       let sortedArg = this.arg.sort((a,b)=> b - a);
       let middleIndex = Math.floor(sortedArg.length/2);
       if (sortedArg.length % 2 === 0) {
        return (sortedArg[middleIndex - 1] + sortedArg[middleIndex]) / 2;
      } else {
        return sortedArg[middleIndex];
      }
   }

   get mode(){
    const frequency = {};
    let maxFrequency = 0;
    let modes = [];

    for (const num of this.arg) {
      frequency[num] = (frequency[num] || 0) + 1;
      if (frequency[num] > maxFrequency) {
        maxFrequency = frequency[num];
        modes = [num];
      } else if (frequency[num] === maxFrequency) {
        modes.push(num);
      }
    }

    return modes.length === Object.keys(frequency).length ? [] : modes;
   }

   get range(){
    const sortedData = this.arg.sort((a, b) => a - b);
    return sortedData[sortedData.length - 1] - sortedData[0];
   }

   get variance(){
    const mean = this.mean;
    const sumOfSquares = this.arg.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
    return sumOfSquares / this.arg.length;
   }

   get standardDeviation(){
     return Math.sqrt(this.variance)
   }

   get percentile(){
    const sortedData = this.arg.sort((a, b) => a - b);
    const index = (100 / 100) * (sortedData.length - 1);
    const lowerIndex = Math.floor(index);
    const upperIndex = Math.ceil(index);

  if (lowerIndex === upperIndex) {
    return sortedData[lowerIndex];
  } else {
    const lowerValue = sortedData[lowerIndex];
    const upperValue = sortedData[upperIndex];
    return lowerValue + (upperValue - lowerValue) * (index - lowerIndex);
  }
   }

   get freqDist(){
    const frequency = {};

   for (const num of this.arg) {
    frequency[num] = (frequency[num] || 0) + 1;
   }

   return frequency;

   }

}
let statistics = new Statistics(ages);
console.log(statistics.count)
console.log(statistics.sum)
console.log(statistics.min)
console.log(statistics.max)
console.log(statistics.mean)
console.log(statistics.median)
console.log(statistics.mode)
console.log(statistics.range)
console.log(statistics.variance)
console.log(statistics.standardDeviation)
console.log(statistics.percentile)
console.log(statistics.freqDist)
