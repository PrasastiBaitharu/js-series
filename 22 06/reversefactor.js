let n=6;
console.log("Number is",n);
console.log("Factors of number in reverse");
let i=n;
while(i>=1){
    if(n%i==0){
        console.log(i);
    }
    i--;
}