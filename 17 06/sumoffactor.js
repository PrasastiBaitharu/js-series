let n=6;
let s=0;
console.log("Number is",n);
for(let i=1 ; i<=n ; i++){
    if(n%i==0){
        s=s+i;
    }
}
console.log("Sum of factors is",s)