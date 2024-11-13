const prime = (n) =>{
    let c=0;
    for(let i=1; i<=n; i++){
        if(n%i==0){
            c++;
        }
    }
    showPrimeOrNot(c);
}
function showPrimeOrNot(c){
    if(c==2){
        console.log("It is a prime number");
    }else{
        console.log("It is a composite number");
    }
}
function checkPrime(callback,n){
    callback(n);
}
checkPrime(prime,5);