const lastDigit = () => {
    let n = 123;
    console.log("Number is " , n);
    let a = n % 10;
    return a;
}
let r = lastDigit();
console.log("Last digit is " , r);