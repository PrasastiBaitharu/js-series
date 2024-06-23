let n=6;
console.log("Number is",n);
console.log("Factor of number in reverse are");
let i=n;
do{
    if(n%i==0){
        console.log(i);
    }
    i--;
}while(i>=1);