const factorial = (n) => {
    let f = 1;
    for(let i=1 ; i<=n ; i++){
        f = f * i;
    }
    return f;
}

const strong = (n) =>{
    let s = 0;
    while(n>0){
        a = n % 10;
        f = factorial(a);
        s = s + f;
        n = parseInt(n/10);
    }
    return s;
}

let n = 145;
console.log("Number is " , n);
let r = strong(n);
let ans = n==r?"It is a strong number" : "It is not a strong number";
console.log(ans);