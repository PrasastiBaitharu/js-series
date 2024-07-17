let strong = function(){
    let n = 145;
    let m = n;
    let s = 0;
    console.log("Number is " , n);
    while(n>0){
        a = n % 10;
        let f = 1;
        for(let i=1 ; i<=a ; i++){
            f = f * i;
        }
        s = s + f;
        n = parseInt(n / 10);
    }
    if( m == s){
        console.log(m , "is a strong number");
    }else{
        console.log(m , "is not a strong number");
    }
}
strong();