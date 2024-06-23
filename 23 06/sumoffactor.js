let n=6;
console.log("Number is",n);
let s=0;
let i=1;
do{
    if(n%i==0){
        s=s+i;
    }
    i++;
}while(i<=n);
console.log("Sum of factor are",s);