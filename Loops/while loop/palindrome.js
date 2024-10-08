//Take any 3 digit number and display the number and its reverse and check wheather the number is palindrome or not
let n=121;
let m = n;
let v=100;
let r = 0;
console.log("Number is:" , n);
while(n>0){
    let a = n%10;
    r = r + a*v;
    n = parseInt(n/10);
    v = parseInt(v/10);
}
console.log("Reverse of the number =" , r);
if(m==r){
    console.log("It is a palindrome number");
}else{
    console.log("It is not a palindrome number");
}