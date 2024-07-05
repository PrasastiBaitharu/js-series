function even(){
    let n=6;
    console.log("Number is " ,n);
    let r=n%2;
    return r;
}
let r= even();
if(r==0){
    console.log("Number is even");
}else{
    console.log("Numer is odd");
}