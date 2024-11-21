function display(callback, n){
    callback(n, numberOfDigit);
}
display(armstrong,153);
function armstrong(n,callback){
    callback(n,sumOfDigit);
}
function numberOfDigit(n,callback){
    let m=n;
    let c=0;
    while(n>0){
        c++;
        n=parseInt(n/10);
    }
    callback(m,c,comparision);
}
function sumOfDigit(m,c,callback){
    let n=m;
    let s=0;
    while(n>0){
        let a= n%10;
        let p=1;
        for(let i=1 ; i<=c; i++){
            p=p*a;
        }
        s=s+p;
        n=parseInt(n/10);
    }
    callback(m,s);
}
function comparision(m,s){
    if(m==s){
        console.log("It is a armstrong number");
    }else{
        console.log("It is not a armstrong  number");
    }
}