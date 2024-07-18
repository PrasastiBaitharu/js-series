let armstrong = function(n){
    let m = n;
    console.log("Number is " , n);
    let c = 0;
    while(n>0){
        c++;
        n = parseInt(n/10);
    }
    let s = 0;
    while(m>0){
        a = m % 10;
        let f=1 ;
        for(let i=1 ; i<=c ; i++){
            f = f * a;
        }
        s = s+f;
        m = parseInt(m/10);
    }
    return s;
}
let q = 153;
let r = armstrong(q);
if(q == r){
    console.log("It is a armstrong number");
}else{
    console.log("It is not a armstrong number");
}