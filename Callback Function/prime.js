const checkPrime = (c) =>{
    if(c==2){
        console.log("It is prime");
    }else{
        console.log("It is composite");
    }
}
const prime = (callback , n) => {
    let c = 0;
    for(let i=1 ; i<=n ; i++){
        if(n%i==0){
            c++;
        }
    }
    callback(c);
}
let n = 5;
console.log("Number is:" , n);
prime(checkPrime , n);