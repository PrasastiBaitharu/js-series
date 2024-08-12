const prime = (n) => {
    let c = 0;
    for(let i = 1 ; i<=n ; i++){
        if(n%i==0){
            c++;
        }
    }
    if(c==2){
        return n;
    }
}

let n = [1,2,3,4,5,6,7,8,9,10];
for(let a = 0 ; a<n.length; a++){
    let r = prime(n[a]);
    if(r==n[a]){
        console.log(r)
    }
}