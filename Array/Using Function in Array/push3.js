const push = (n , p) => {
    l=n.length;
    for(let i = l ; i>p-1 ; i--){
        n[i] = n[i-1];
    }
    return n;
}
let n = [10,20,30,40,50,60];
let p = 5;
let r = push(n , p);
r[p-1] = 45;
console.log(r);