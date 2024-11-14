function showPrimeOrNot(c){
    if(c==2){
        console.log("It is a prime number");
    }else{
        console.log("It is a composite number");
    }
}
function prime(n, callback){
    let c=0;
    for(let i=1 ; i<=n; i++){
        if(n%i==0){
            c++;
        }
    }
    callback(c);
}
function checkPrime(callback, n){
    callback(n, showPrimeOrNot);
}
checkPrime(prime,5);