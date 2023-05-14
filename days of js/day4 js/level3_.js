/*Write a program which tells the number of days in a month.

let theMonth = prompt('Enter Month');
switch (theMonth){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${theMonth} has 31 days`);
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(`${theMonth} has 30 days`);
        break;
    case 'February':
        console.log(`${theMonth} has 28 days`);
        break;


    default:
        console.log('Not a month');
}

2. Write a program which tells the number of days in a month, now consider leap year.
let Year = new Date().getFullYear();

switch (theMonth){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${theMonth} has 31 days`);
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(`${theMonth} has 30 days`);
        break;
    case 'February':
        if( Year % 4 !== 0){
            console.log(`${theMonth} has 29 days`)
        }else{
        console.log(`${theMonth} has 28 days`);
        }
        break;


    default:
        console.log('Not a month');
}*/




