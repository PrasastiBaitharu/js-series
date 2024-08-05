let n = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let s = 0;
for(const item in n){
    s = s + n[item];
}
console.log("Sum of 10 numbers are" , s);