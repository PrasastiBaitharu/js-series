let n=6;
let s=0;
console.log("Number is",n);
let i=1;
while(i<=n){
    if(n%i==0){
        s=s+i;
    }
    i++;
}
console.log("Sum of factor is ",s);