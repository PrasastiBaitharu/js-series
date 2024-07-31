const gcd = (a , b) => {
    if(a<b){
        while(a < b){
            let r = b % a ;
            if(r == 0){
                return a ;
            }
            else{
                b = a;
                a = r;
            }
        }
    }
    else{
        while(a > b){
            let r = a % b;
            if(r == 0){
                return b;
            }
            else{
                a = b;
                b = r;
            }
        }
    }
}

let a = 128;
let b = 96;
let r = gcd(a , b);
console.log("GCD of" , a , "and" , b , "is" , r);