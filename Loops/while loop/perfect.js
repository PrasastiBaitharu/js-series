let n = 6;
console.log("Number is:" , n);
let s = 0;
let i=1;
while(i<=n){
    if(n%i==0){
        s=s+i;
    }
    i++;
}
console.log("Sum of factor is:" , s);
if(n*2==s){
    console.log(n , "is a perfect number");
}else{
    console.log(n , "is not a perfect number");
}