function sumDigit(){
    let n = 153;
    console.log("Number is: " , n);
    let s = 0;
    while(n>0){
        let a = n % 10;
        s = s + a;
        n = parseInt(n/10);
    }
    return s;
}
let r = sumDigit();
console.log("Sum of Digits:" , r);