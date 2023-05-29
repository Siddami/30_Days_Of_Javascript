//1. Create an empty object called dog
const dog = {};

//2. Print the the dog object on the console
console.log(dog);

//3. Add name, legs, color, age and bark properties for the dog object. 
//The bark property is a method which return woof woof
dog.name = 'Tommy';
dog.legs = 4;
dog.color = 'white';
dog.age = 12;
dog.bark = function (){
    return 'woof woof';
}

//4. Get name, legs, color, age and bark value from the dog object
let dogName = dog.name;
let dogLegs = dog.legs;
let dogColor = dog.color;
let dogAge = dog.age;
let dogBark = dog.bark;
console.log(dogName, dogLegs, dogColor, dogAge, dogBark())

//5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'poodle';
dog.getDogInfo = function (){
    return `${this.name} is a ${this.color}${this.breed} with ${this.legs} legs. He is ${this.age} years old, and barks like ${this.bark()}.`
}

console.log(dog.getDogInfo())





