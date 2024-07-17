let prime =function(){
    let a  = 5;
    console.log("Number is " , a);
    let c = 0;
    for(let i=1 ; i<=a ; i++){
        if(a % i == 0){
            c++;
        }
    }
    return c;
}
let r = prime();
if(r == 2){
    console.log("It is a prime number");
}else{
    console.log("It is not a prime number");
}