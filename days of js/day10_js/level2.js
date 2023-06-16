//1. Find a union b
const a = [1,2,4,5];
const b = [3,4,6,2,7];
const c = [...a,...b]

let A = new Set(a);
let B = new Set(b);
console.log(A);
console.log(B);

//2. Find a intersection b
let cee = a.filter(num => B.has(num));
let C = new Set(cee);
console.log(C);

//3. Find a with b
let aWithb = a.filter(num => !B.has(num));
let aWithB = new Set(aWithb);
console.log(aWithB)
