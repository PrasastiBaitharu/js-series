const factorial = (a) => {
    let f = 1;
    for(let i=1 ; i<=a ; i++){
        f = f * i;
    }
    return f;
}

const strong = () => {
    let n = 145;
    console.log("Number is " , n);
    let m = n;
    let s = 0;
    while(n>0){
        a = n % 10;
        let f = factorial(a);
        s = s + f;
        n = parseInt(n/10);
    }
    if(m==s){
        console.log("It is a strong number");
    }else{
        console.log("It is not a strong number");
    }
}
strong();