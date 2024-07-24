const lastDigit = (n) => {
    let a = n % 10;
    return a;
}
let n = 123;
console.log("Number is " , n);
let r = lastDigit(n);
console.log("Last digit is " , r);