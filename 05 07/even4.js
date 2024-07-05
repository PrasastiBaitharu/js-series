function even(){
    let n=6;
    console.log("Number is ",n);
    if(n%2==0){
        return 0;
    }
    return 1;
}
let r = even();
if(r==0){
    console.log("Number is even");
}else{
    console.log("Number is odd");
}