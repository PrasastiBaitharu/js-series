const even =  function(n){
    let p = n % 2;
    return p;
}
let a = 6;
console.log("Number is " , a);
let r = even(a);
if(r == 0){
    console.log(a,"is even");
}else{
    console.log(a,"is odd");
}