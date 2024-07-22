const strong =(n) => {
    let s = 0;
    while(n>0){
        a = n % 10;
        f = factorial(a);
        s = s + f;
        n = parseInt(n/10);
    }
    return s ;
}

const factorial = (a) => {
    let f =1 ;
    for(let i=1 ; i<=a ; i++){
        f = f * i;
    }
    return f;
}

let p = 145;
console.log("Number is " , p);
let r = strong(p);
if(p==r){
    console.log("It  is a strong number");
}else{
    console.log("It is not a strong number");
}