const prime = () =>{
    let n=5;
    let c= 0;
    for(let i=0; i<=n; i++){
        if(n%i==0){
            c++;
        }
    }
    if(c==2){
        console.log("It is a prime number");
    }else{
        console.log("It is a composite number");
    }
}

const checkPrime=(callback)=>{
    callback();
}
checkPrime(prime);