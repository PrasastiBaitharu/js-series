const prime = (n) => {
    let c = 0;
    for(let i=1 ; i<=n ; i++){
        if(n % i == 0){
            c++;
        }
    }
    return c;
}

let n = 6;
console.log("Number is " , n);
let r = prime(n);
let ans = r == 2?"It is a prime number" : "It is a composite number";
console.log(ans);