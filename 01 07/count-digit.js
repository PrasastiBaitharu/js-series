let n=1234;
console.log("Number is ",n);
let c=0;
while(n>0){
    c++;
    n=parseInt(n/10);
}
console.log("Number of digits are",c);