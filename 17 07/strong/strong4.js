let strong = function(n){
    let s = 0;
    while(n>0){
        let f = 1;
        a = n % 10;
        for(let i=1 ; i<=a ; i++){
            f = f * i;
        }
        s = s + f;
        n = parseInt(n/10);
    }
    return s;
}
let p = 145;
console.log("Number is " , p);
let r = strong(p);
if(p == r){
    console.log(p, "is a strong number");
}else{
    console.log(p , "is not a strong number");
}