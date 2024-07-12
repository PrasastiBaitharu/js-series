function strong(n){
    let s = 0;
    while(n>0){
        a = n % 10;
        f = factorial(a);
        s = s + f;
        n = parseInt(n / 10);
    }
    return s;
}

function factorial(a){
    let f = 1;
    for(let i=1 ; i<=a ; i++){
        f = f * i;
    }
    return f;
}

let p = 145;
let r = strong(p);
console.log("Number is " , p);
if(p == r){
    console.log(p , "is the strong number");
}else{
    console.log(p , "is not the strong number")
}