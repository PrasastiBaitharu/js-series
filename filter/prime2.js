const prime = (n) =>{
    let c = 0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            c++;
        }
    }
    if(c==2){
        return n;
    }
}
let arr = [1,2,3,4,5,6,7,8,9,10];

const checkPrime = (callback) =>{
    console.log(arr.filter(callback))
}
checkPrime(prime);