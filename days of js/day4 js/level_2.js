/*1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/
let score = 50;
if (score === 80 || score === 100){
    console.log('Your grade is A');
}else if(score >= 70 && score < 80){
   console.log('Your grade is B');
}else if(score >= 60 && score < 70){
    console.log('Your grade is C');
}else if(score >= 50 && score < 60){
    console.log('Your grade is D');
}else if(score >= 0 && score < 50){
    console.log('Your grade is F');
}else{
    console.log('Your have submitted an invalid score')
}


/*2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

let Month = 'August'
switch(Month){
    case 'September':
    case 'October':
    case 'November':
        console.log('the season is Autumn');
        break;
    case 'December':
    case 'January':
    case 'February':
        console.log('the season is Winter');
        break;
    case 'March':
    case 'April':
    case 'May':
        console.log('the season is Spring');
        break;
    case 'June':
    case 'July':
    case 'August':
        console.log('the season is Summer');
        break;
    
    default:
        console.log('there is no such month');

    
}

/*3. Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt('What is the day today?');
switch (day){
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log(`${day} is a working day`);
        break;
    case 'Saturday':
    case 'Sunday':
        console.log(`${day} is a weekend day`);
        break;

    default:
        console.log('Not a valid day');
}*/














