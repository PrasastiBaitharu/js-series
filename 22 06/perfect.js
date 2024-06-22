let n=5;
let s=0;
console.log("Number is",n);
let i=1;
while(i<=n){
    if(n%i==0){
        s=s+i;
    }
    i++;
}
if(n*2==s){
    console.log(n,"is a perfect number");
}else{
    console.log(n,"is not a perfect number");
}