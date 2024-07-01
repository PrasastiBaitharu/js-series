let n=153;
let m=n;
let p=n;
console.log("Number is ",n);
let c=0;
while(n>0){
    c++;
    n=parseInt(n/10);
}
let s=0;

while(m>0){
    let f=1;
    a=m%10;
    for(let i=1 ; i<=c ; i++){
        f=f*a
    }
    s=s+f;
    m=parseInt(m/10);
}
if(p==s){
    console.log(p,"is a armstrong number");
}else{
    console.log(p,"is not a armstrong number");
}