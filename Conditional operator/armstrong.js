const decrease = (n) => parseInt(n/10);

const lastDigit = (n) => n % 10;

const count = (n) => {
    let c = 0;
    while(n>0){
        c++;
        n = decrease(n);
    }
    return c;
}

const power = (a , c) => {
    let p = 1;
    for(let i=1 ; i<=c ; i++){
        p = p * a;
    }
    return p;
}

const armstrong = (n) => {
    let s = 0;
    let c = count(n);
    while(n>0){
        a = lastDigit(n);
        p = power(a , c);
        s = s + p;
        n = decrease(n);
    }
    return s ;
}

let n = 153;
console.log("Number is " , n);
let r = armstrong(n);
let ans = n==r? "It is an armstrong number" : "It is not an armstrong number";
console.log(ans);