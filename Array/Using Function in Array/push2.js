const pushFirst = (n) => {
    let l = n.length;
    for(let i=l ; i>0 ; i--){
        n[i] = n[i-1];
    }
    return n;
}
let n = [10,20,30,40,50,60];
let r = pushFirst(n);
r[0] = 90;
console.log(r);