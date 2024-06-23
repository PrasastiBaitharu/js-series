let n=6;
console.log("Number is",n);
let c=0;
let i=1;
do{
    if(n%i==0){
        c++;
    }
    i++
}while(i<=n);
console.log("Number of factor are",c);