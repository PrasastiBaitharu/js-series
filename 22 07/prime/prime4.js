const prime = (n) => {
    let c = 0;
    for(let i=1 ; i<=n ; i++){
        if(n % i == 0){
            c++;
        }
    }
    return c;
}

let n = 5;
console.log("Number is " , n);
let r = prime(n)
if(r == 2){
    console.log("It is a prime number");
}else{
    console.log("It is a composite number");
}