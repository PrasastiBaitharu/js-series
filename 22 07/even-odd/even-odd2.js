const even = () => {
    let n = 6;
    console.log("Number is " , n);
    let e = n % 2;
    return e;
}
let r = even();
if(r == 0){
    console.log("It is an even number");
}else{
    console.log("It is an odd number");
}