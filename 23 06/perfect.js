let n=6;
console.log("Number is",n);
let s=0;
let i=1;
do{
    if(n%i==0){
        s=s+i;
    }
    i++
}while(i<=n);
if(n*2==s){
    console.log(n,"is a perfect number");
}else{
    console.log(n,"is not a perfect number")
}