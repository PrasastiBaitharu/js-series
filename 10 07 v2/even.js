function even(n){
    let r = n % 2;
    return r;
}

let a = 6;
let e = even(a);
console.log("Number is " , a);
if(e == 0){
    console.log(a , "is a even number ");
}else{
    console.log(a , "is a odd number ");
}