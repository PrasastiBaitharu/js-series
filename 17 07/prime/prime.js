let prime = function(){
    let a = 5;
    console.log("Number is " , a);
    let c = 0;
    for(let i=1 ; i<=a ; i++){
        if(a % i == 0){
            c++;
        }
    }
    if(c == 2){
        console.log(a , "is a prime number");
    }else{
        console.log(a , "is a composite number");
    }
}
prime();