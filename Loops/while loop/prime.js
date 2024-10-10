//Display prime number between 1 to 50
console.log("Prime number between 1 to 50 are:");
let i=1;
while(i<=50){
    let c=0;
    let j=1
    while(j<=i){
        if(i%j==0){
            c++;
        }
        j++;
    }
    if(c==2){
        console.log(i);
    }
    i++;
}