function big(a , b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}
let a = 10;
let b = 20;
console.log("First number is:" , a);
console.log("Second number is:" , b);
let r = big(a , b);
console.log("Biggest number is:" , r);