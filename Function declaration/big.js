function big(){
    let a = 10;
    let b = 20;
    let c = 30;
    console.log("First no.:" , a);
    console.log("Second no.:" , b);
    console.log("Third no.:" , c);
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
}
let r = big();
console.log(r , "is the biggest");