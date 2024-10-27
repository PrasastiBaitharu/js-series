function reverse(n){
    console.log("Number is:" , n);
    let a = n% 10;
    let p = parseInt(n/10);
    let b = p%10;
    let c = parseInt(p/10);
    let r = a*100+b*10+c;
    return r;
}
let n = 153;
let r = reverse(n);
console.log("Reverse of the number:" , r);