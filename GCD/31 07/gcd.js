const gcd = (a , b) => {
    while(a < b){
        let r = b % a;
        if(r == 0){
            return a ;
        }else{
            b = a;
            a = r;
        }
    }
}

let a = 10;
let b = 20;
let r = gcd(a , b);
console.log("GCD of" , a , "and" , b , "is" , r);