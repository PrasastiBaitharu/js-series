const strong = (n) => {
    let m = n;
    let s = 0;
    while(n>0){
        a = n % 10;
        let f =1;
        for(let i=1 ; i<=a ; i++){
            f = f *i;
        }
        s = s + f;
        n = parseInt(n/10);
    }
    if(m==s){
        console.log("It is a strong number");
    }else{
        console.log("It is a strong number");
    }
}
let n = 145;
console.log("Number is " , n);
strong(n);