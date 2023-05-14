const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
//if it does not exist add Sass to the array and print the array.
if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess');
}else{
    webTechs.push('Sass');
    console.log(webTechs)
}

//6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);








