//Take any 4 digit number and display the sum of all even digit and sum of all odd digit
let n=1234;
let e=0;
let o=0;
console.log("Number is:" , n);
while(n>0){
    let a = n%10;
    if(a%2==0){
        e = e + a;
    }else{
        o = o + a;
    }
    n=parseInt(n/10);
}
console.log("Sum of all even digits are:" , e);
console.log("Sum of all odd digits are:" , o);