let lastDigit = function(n){
    let p = n % 10;
    return p;
}
let a = 123;
console.log("Number is " , a);
let r = lastDigit(a);
console.log("Last Digit is " , r);