let n = 123;
console.log("Number is",n);
let s = 0 ;
for(let i=1 ; n>0 ; i++){
    a=n%10;
    s=s+a;
    n=parseInt(n/10);
}
console.log("Sum of digits is",s);