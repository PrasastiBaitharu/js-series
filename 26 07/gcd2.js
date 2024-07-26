const gcd = () => {
    let a = 16;
    let b = 32;
    let c = 0;
    if(a<b){
        c = a;
    }else{
        c = b;
    }
    for(let i=c ; i>=1 ; i--){
        if(a % i == 0 && b % i == 0){
            ans = i;
            break;
        }
    }
    console.log("Gcd of" , a , "and" , b , "is" , ans);  
}
gcd();