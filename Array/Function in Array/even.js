const even = (n) => {
    if(n%2==0){
        return n;
    }
}
let n = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0 ; i<n.length ; i++){
    let r = even(n[i]);
    if(n[i] == r){
        console.log(r);
    }
}