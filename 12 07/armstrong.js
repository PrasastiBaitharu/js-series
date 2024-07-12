function armstrong(n){
    let m = n;
    let c = 0;
    while(n > 0){
        c++;
        n = parseInt(n / 10);
    }
    let s = 0;
    while(m > 0){
        let f = 1;
        a = m % 10;
        for(let i=1 ; i<=c ; i++){
            f = f * a;
        }
        s = s + f;
        m = parseInt(m / 10);
    }
    return s;
}

let p = 153;
let r = armstrong(p);
console.log("Number is " , p);
if(p == r){
    console.log(p , "is the armstrong number");
}else{
    console.log(p , "is not the armstrong number")
}