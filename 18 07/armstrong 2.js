let count = function(n){
    let c = 0;
    while(n>0){
        c++;
        n = parseInt(n / 10);
    }
    return c;
}

let power = function(a , c){
    p = 1;
    for(let i=1 ; i<=c ; i++){
        p = p * a;
    }
    return p;
}

let armstrong = function(n){
    let c = count(n);
    let s = 0;
    while(n > 0){
        let a = n % 10;
        let p = power(a , c);
        s = s + p;
        n = parseInt(n / 10);
    }
    return s;
}

let q = 153;
console.log("Number is " , q);
let r = armstrong(q);
if(q == r){
    console.log("It is a armstrong number");
}else{
    console.log("It is not a armstrong number");
}