function primeCompo(){
    let n=5;
    console.log("Number is", n);
    let c=0;
    for(let i=1 ; i<=n ; i++){
        if(n%i==0){
            c++;
        }
    }
    if(c==2){
        console.log(n,"is a prime number");
    }else{
        console.log(n,"is a composite number")
    }

}
primeCompo();