function prime(n){
    let c = 0;
    for(let i=1 ; i<=n ; i++){
        if(n % i == 0){
            c++
        }
    }
    return c;
}
 let a = 5;
 let p = prime(a);
 console.log("Number is " , a);
 if(p == 2){
    console.log(a , "is a prime number");
 }else{
    console.log(a , "is a composite number")
 }