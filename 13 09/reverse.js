let n = 153;
console.log("Number is " , n);
let a = n % 10;
let m = parseInt(n/10);
let b = m % 10;
let c = parseInt(m / 10);
let r = a*100 + b*10 + c;
console.log("First digit =" , c);
console.log("Second digit =" , b);
console.log("Third digit =" , a);
console.log("Reverse of digit =" , r);