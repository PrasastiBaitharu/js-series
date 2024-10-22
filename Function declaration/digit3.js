function digit(n){
    console.log("Number is" , n);
    let s = 0;
    while(n>0){
        let a = n % 10;
        s = s + a;
        n = parseInt(n / 10);
    }
    return s;
}
let n = 153;
let r = digit(n);
console.log("Sum of digits:" , r);