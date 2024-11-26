function armstrong(n){
    let m=n;
    let q=n;
    let s=0;
    let c=0;
    while(n>0){
        c++;
        n=parseInt(n/10);
    }
    while(m>0){
        a=m%10;
        let p=1;
        for(let i=1 ; i<=c ; i++) {
            p=p*a;
        }
        s=s+p;
        m=parseInt(m/10);
    }
    if(q==s){
        return q;
    }
}

const arr=[153,145,267,9,7];
function checkArmstrong(callback){
    console.log(arr.filter(callback))
}
checkArmstrong(armstrong);