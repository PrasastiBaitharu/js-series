function strong(n){
    console.log("Number is :" , n);
    let s = 0;
    while(n>0){
        let a = n%10;
        let f = 1;
        for(let i=1 ; i<=a ; i++){
            f = f * i;
        }
        s = s + f;
        n = parseInt(n/10);
    }
    return s;
}
let n = 145;
let r = strong(n);
if(n==r){
    console.log("It is a strong number");
}else{
    console.log("It is not a strong number");
}