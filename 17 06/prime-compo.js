let n=6;
let c=0;
console.log("Number is",n);
for(let i=1 ; i<=n ; i++){
    if(n%i==0){
        c++;
    }
}
if(c==2){
    console.log(n,"is a prime number");
}else{
    console.log(n,"is a composite number");
}