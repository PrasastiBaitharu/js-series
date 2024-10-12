let n=6;
console.log("Number is:" , n);
console.log("Factors are:")
let s=0;
let i=1;
while(i<=n){
    if(n%i==0){
        console.log(i);
        s=s+i;
    }
    i++;
}
console.log("Sum of all factors are: " , s);