function lastDigit(n){
    let r = n % 10;
    return r;
}
let a = 123;
let l = lastDigit(a);
console.log("Number is " , a);
console.log("Last digit is " , l);