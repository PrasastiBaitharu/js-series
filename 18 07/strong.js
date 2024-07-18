let strong = function(n){
    let s = 0;
    while(n>0){
        let a=n%10;
        let f=1;
        for(let i=1 ; i<=a ; i++){
            f = f *i;
        }
        s=s+f;
        n=parseInt(n/10);
    }
    return s;
}
let a=145;
console.log("Number is " , a);
let r = strong(a);
if(a===r){
    console.log("strong");
}else{
    console.log("not strong");
}