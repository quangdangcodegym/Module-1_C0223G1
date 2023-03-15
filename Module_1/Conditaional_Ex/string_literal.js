/**
var a = 15;
var b = 1;
// let sum  = a + b;
// let sum = "5 + 5 = 10";
// console.log(sum); 

// string literal
let sum1 = `${a} + ${b} = ${a  + b}`;       

console.log(sum1);

let number = "";
let t1 = +number;
let t2 = Number(number);


console.log(t1);
console.log(t2);

console.log(typeof t1);
console.log(typeof t2);

 */
let a = 0.67613;

// 0.68
console.log(Math.round(a*100) /100);

console.log(a.toFixed(2));
