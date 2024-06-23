let n=5;
console.log("Number is",n);
let c=0;
let i=1;
do{
    if(n%i==0){
        c++;
    }
    i++;
}while(i<=n);
if(c==2){
    console.log(n,"is a prime number");
}else{
    console.log(n,"is a composite number")
}