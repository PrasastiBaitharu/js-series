const prime = (n)=> {
    let c = 0;
    for(let i=1 ; i<=n ; i++){
        if(n % i == 0){
            c++;
        }
    }
    if(c == 2){
        console.log(n);
    }
}

const primeFactor = (n) => {
    for(let i=1 ; i<=n ; i++){
        if(n % i == 0){
            prime(i);
        }
    }
}

let n = 30;
primeFactor(n);