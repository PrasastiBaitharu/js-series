const count = (n) =>{
    let c=0;
    while(n>0){
        c++;
        n = parseInt(n/10);
    }
    return c;
}

const power = (a,c)=>{
    let p=1;
    for(let i=1 ; i<=c ; i++){
        p=p*a;
    }
    return p;
}

const checkArmstrong = (n,s) =>{
    if(n==s){
        console.log("It is a armstrong number");
    }else{
        console.log("It is not a armstrong number");
    }
}

const armstrong = (n,callback1,callback2,callback3)=>{
    let m=n;
    let s=0;
    let c=callback1(n);
    while(n>0){
        a=n%10;
        let p = callback2(a,c);
        s=s+p;
        n=parseInt(n/10);
    }
    callback3(m,s);
}

let n = 153;
armstrong(n,count,power,checkArmstrong);