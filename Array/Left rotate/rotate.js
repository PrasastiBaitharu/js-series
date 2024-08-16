let n = [10,20,30,40,50];
let l = n.length;
let r = n[0];
for(let i = 1 ; i<n.length ; i++){
    n[i-1] = n[i];
}
n[l-1]  = r;
console.log(n);