//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
//for loop
// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// //while
// let i = 0;
// while(i <= 10){
//     console.log(i)
//     i++;
// }

// //do while
// let index = 0;
// do {
//     console.log(index);
//     index++
// }while (index <= 10);

// //2. Iterate 10 to 0 using for loop, do the same using while and do while loop
// //for loop
// for (let i = 10; i >= 0; i--){
//     console.log(i)
// }

// //while loop
// let j = 10;
// while(j >= 0){
//     console.log(j)
//     j--
// }

// //do while
// let num = 10;
// do{
//     console.log(num)
//     num--
// } while(num >= 0);

//3. Iterate 0 to n using for loop
// let n = 20;
// for(let i = 0; i <= n; i++){
//     console.log(`${i} of ${n}`);
// }

//4. Write a loop that makes the following pattern using console.log():
/*    #
    ##
    ###
    ####
    #####
    ######
    #######*/
// console.log(`##
// ###
// ####
// #####
// ######
// #######`)

//5. Use loop to print the following pattern:
/*0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100*/

// for(let i = 0; i <= 10; i++){
//     console.log(`${1} * ${i} = ${i * i}`)
// }

//6. Using loop print the following pattern
/* i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000*/
 
//  for (let i = 0; i <= 10; i++){
//    console.log(`${i} ${i**2} ${i**3}`)
//  }

//7. Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 0; i <= 100; i += 2){
//     console.log(i);
// }

//8. Use for loop to iterate from 0 to 100 and print only odd numbers

// for (let i = 1; i < 100; i += 2){
//     console.log(i);
// }

//9. Use for loop to iterate from 0 to 100 and print only prime numbers
// let count = 0;
// let i,j;
// for(j = 2; j <= 100; j++){
//     for(i = 1; i <= j; i++){
//         if(j % i === 0)
//         count++;
        
//     }
//     if(count === 2)
//         console.log(j)
//         count = 0;
// }

//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//The sum of all numbers from 0 to 100 is 5050.
// let counter = 0;
// for(let i = 0; i <= 100; i++){
//     counter += i;
// }
// console.log(`The sum of all numbers from 0 to 100 is ${counter}`);

//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// let evenSum = 0;
// let oddSum = 0;
// for(let i = 0; i <= 100; i+=2){
//     evenSum += i;
// }
// for(let i = 1; i <= 100; i+= 2){
//     oddSum += i
// }
// console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}`)

// //12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// let arr = new Array();
// arr[0] = evenSum;
// arr[1] = oddSum;
// console.log(arr)

//13. Develop a small script which generate array of 5 random numbers
// let newArr = []
// for(let i = 0; i <= 5; i++){
//     let random = Math.floor(Math.random() * 5);
//     newArr.push(random);    
// }
// console.log(newArr)

//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let array = new Array();
// for(let i = 0; i <= 5; i++){
//     let random = Math.floor(Math.random() * i);
//     if(!array.includes(random)){
//         array.push(random)
//     }
// }console.log(array);

//15. Develop a small script which generate a six characters random id:
// let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
// let alpha = ''
// for (let i = 0; i < 6; i++){
//     let randomIndex = Math.floor(Math.random() * characters.length);
//     alpha += characters[randomIndex];
// }
// console.log(alpha);
















