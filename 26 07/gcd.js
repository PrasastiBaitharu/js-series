const gcd = () => {
    let a  = 10;
    let b = 15;
    let c = 0;
    if(a<b){
        c = a;
    }else{
        c = b;
    }
    for(let i=1 ; i<=c ; i++){
        if(a % i == 0 && b % i ==0){
            ans = i;
        }
    }
    console.log("Gcd of " , a , "and" , b , "is" , ans);
}
gcd();