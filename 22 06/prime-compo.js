let n=6;
let c=0;
console.log("Number is",n);
let i=1;
while(i<=n){
    if(n%i==0){
        c++;
    }
    i++;
}
if(c==2){
    console.log(n,"is a prime number");
}else{
    console.log(n,"is a composite number");
}