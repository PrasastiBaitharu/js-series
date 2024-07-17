let prime = function(n){
    let c = 0;
    for (let i=1 ; i<=n ; i++){
        if(n % i == 0){
            c++;
        }
    }
    if(c == 2){
        console.log(n,"is prime");
    }else{
        console.log(n,"is composite");
    }
}
let a = 5;
console.log("Number is " , a);
prime(a);