const pushLast = (n , p) => {
    n[n.length] = p;
    return n;
}
let n = [10,20,30,40,50,60];
let p = 70;
let r = pushLast(n , p);
console.log(r);