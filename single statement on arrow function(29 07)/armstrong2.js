const count = (n) => {
    let c = 0;
    while(n>0){
        c++;
        n = decrease(n);
    }
    return c;
}

const power = (n , c) => {
    let p = 1;
    for(let i=1 ; i<=c ; i++){
        p = p * n;
    }
    return p;
}

const armstrong = (n) =>{
    let s = 0;
    c = count(n);
    while(n>0){
        a = lastDigit(n);
        p = power(a , c);
        s = s + p;
        n = decrease(n);
        
    }
    return s;
}

const lastDigit = (n) => n % 10;
const decrease = (n) => parseInt(n /10) ;

let n = 153;
console.log("Number is ", n);
let r = armstrong(n);
if(n==r){
    console.log("It is a armstrong number")
}else{
    console.log("It is not a armstrong number")
}