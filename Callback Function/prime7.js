function showPrimeOrNot(callback1, n){
    let c = callback1(n);
    if(c==2){
        console.log("It is a prime number");
    }else{
        console.log("It is a composite number");
    }
}
function prime(n, callback2){
    let c=0;
    for(let i=1 ; i<=n; i++){
        if(n%i==0){
            c++;
        }
    }
    return c
}
function checkPrime(callback1, n, callback2){
    callback2(callback1,n );
}
checkPrime(prime,5, showPrimeOrNot);