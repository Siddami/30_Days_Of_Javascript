//Create a separate countries.js file and store the countries array in to this file, 
//create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
//Level 2;
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
//2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ')
console.log(words)
console.log(words.length)  

//3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);

//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);

//remove 'Honey' if you are allergic to honey
let allergy = true;
if(allergy){
    console.log(shoppingCart.indexOf('Honey'));
    console.log(shoppingCart.slice(4,5))
}else{
   console.log(shoppingCart);
}

//modify Tea to 'Green Tea'
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
//If it does not exist add to the countries list.

if(countries.includes('Ethiopia')){
    let ethiopiaIndex = countries.indexOf('Ethiopia')
    console.log(countries[ethiopiaIndex]);
}else{
    countries.push('Ethiopia')
    console.log(countries);
}











































