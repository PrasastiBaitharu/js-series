let n=145;
let m=n;
console.log("Number is ",n);
let s=0;
while(n>0){
    f=1;
    d=n%10;
    for(let i=1 ; i<=d ; i++){
        f=f*i;
    }
    s=s+f;
    n=parseInt(n/10);
    
}
if(m==s){
    console.log(m,"is a strong number")
}else{
    console.log(m,"is not a strong number")
}