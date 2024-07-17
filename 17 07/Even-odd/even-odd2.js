const even = function(){
    let a = 6;
    console.log("Number is " , a);
    let n = a % 2;
    return n;
}
let r = even();
if(r == 0){
    console.log("Number is even");
}else{
    console.log("Number is odd");
}