//Display prime number between 1 to 50
console.log("Prime number between 1 to 50 are:");
for(let i=1 ; i<=50 ; i++){
    let c=0;
    for(let j=1 ; j<=i ; j++){
        if(i%j==0){
            c++;
        }
    }
    if(c==2){
        console.log(i);
    }
}