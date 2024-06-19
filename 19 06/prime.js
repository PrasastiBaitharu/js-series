let c=0;
console.log("Prime numbers between 10 & 20 are")
for(let n=10 ; n<=20 ; n++){
    for(let i=1 ; i<=n ; i++){
        if( n % i == 0){
            c++;
        }
    }
    if(c == 2){
        console.log(n);
    }
    c=0;
}