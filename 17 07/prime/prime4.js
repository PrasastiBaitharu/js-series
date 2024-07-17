let prime = function(n){
    let c = 0;
    for(let i=1 ; i<=n ; i++){
        if(n % i == 0){
            c++
        }
    }
    return c;
}
let a = 5;
console.log("Number is " , a);
let r = prime(a);
if(r == 2){
    console.log(a , "is prime");
}else{
    console.log(a , "is composite")
}