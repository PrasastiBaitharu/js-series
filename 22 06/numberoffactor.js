let n=6;
let c=0;
console.log("Number is", n);
let i =1;
while(i<=n){
    if(n%i==0){
        c++;
    }
    i++;
}
console.log("Number of factor are",c);