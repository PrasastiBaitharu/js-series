let n = [10,20,30,40,50];
let l = n.length;
let r = 2;
for(let j = 1 ; j<=r ; j++){
    let temp = n[0];
    for(var i =1 ; i<l ; i++){
        n[i-1]=n[i];
    }
    n[i-1]=temp;
}
console.log(n);