let n = 6;
let s = 0;
console.log("Number is:" , n);
console.log("Factors are:");
for(let i=1 ; i<=n ; i++){
    if(n%i==0){
        console.log(i);
        s = s + i;
    }
}
console.log("Sum of factors are: " , s);