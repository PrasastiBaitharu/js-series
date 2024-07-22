const count = (n) => {
    let c = 0;
    while(n>0){
        c++;
        n = parseInt(n/10);
    }
    return c;
}
const power = (a , c) => {
    let p = 1;
    for(let i=1 ; i<=c ; i++){
        p = p * a;
    }
    return p;
}

const armstrong = (n) => {
    let m = n;
    let s = 0;
    let c = count(n);
    while(n > 0){
        a = n % 10;
        p = power(a , c);
        s = s+p;
        n = parseInt(n / 10);
    }
    if(m==s){
        console.log("It is a armstrong number");
    }else{
        console.log("It is not a armstrong number");
    }
}

let n = 153;
console.log("Number is " , n);
armstrong(n);