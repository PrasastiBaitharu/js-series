//Take a number (3 digited ) and display the number and sum of all digit
let n = 513;
console.log("Number is:" , n);
let s=0;
for(let i=1 ; n>0 ; i++){
    let a = n%10;
    s = s+a;
    n = parseInt(n/10);
}
console.log("Sum of digit =", s);