const prime = (n) =>{
    let c=0;
    for(let i=1 ; i<=n ; i++){
        if(n%i==0){
            c++;
        }
    }
    if(c==2){
        console.log(n,"is a prime number");
    }else{
        console.log(n,"is a composite number");
    }
}
function display(callback){
    callback(5);
}

const armstrong = (n) =>{
    let m=n;
    let q=n;
    let c=0;
    let s=0;
    while(n>0){
        c++;
        n=parseInt(n/10);
    }
    while(m>0){
        let a=  m%10;
        let p=1;
        for(let i=1 ; i<=c ; i++){
            p=p*a;
        }
        s=s+p;
        m=parseInt(m/10);
    }
    if(q==s){
        console.log(q,"is a armstrong number");
    }else{
        console.log(q,"is not a armstrong number");
    }
}

const strong = (n) =>{
    let m=n;
    let s=0;
    while(n>0){
        let a=n%10;
        let f=1;
        for(let i=1 ; i<=a; i++){
            f=f*i;
        }
        s=s+f;
        n=parseInt(n/10);
    }
    if(m==s){
        console.log(m,"is a strong number");
    }else{
        console.log(m,"is not a strong number");
    }
}

module.exports={display,prime,armstrong,strong};