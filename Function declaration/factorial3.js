function factorial(n){
    let f = 1;
    for(let i=1 ; i<=n ; i++){
        f = f * i;
    }
    return f;
}
let n = 5;
console.log("Number is:" , n);
let r = factorial(n);
console.log("Factorial of the number:" , r);