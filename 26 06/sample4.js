let n = 5123;
console.log("Number is",n);
let s = 0 ;
while(n>0){
    a=n%10;
    s=s+a;
    n=parseInt(n/10);
}
console.log("Sum of digits is",s);