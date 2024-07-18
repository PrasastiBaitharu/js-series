let strong = function(n){
    let s = 0;
    while (n>0){
        let a=n%10;
        f=factorial(a);
        s=s+f;
        n=parseInt(n/10);
    }
    return s;
}
let factorial=function(a){
    let f=1;
    for(let i=1 ; i<=a ; i++){
        f= f *i;
    }
    return f;
}
let q = 145;
console.log("Number is " , q);
let r = strong(q);

if(q==r){
    console.log("It is a strong number");
}else{
    console.log("It is not a strong number");
}