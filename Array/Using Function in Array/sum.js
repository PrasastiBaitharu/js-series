function arraySum(m){
    let s = 0;
    for(const items of m){
        s = s + items;
    }
    return s;
}
let n = [10,20,30,40,50,60,70,80,90,100];
let s = arraySum(n);
console.log("Sum of array is" , s);