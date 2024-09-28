//Take any 4 digit number and display the prime digit
let n = 1234;
console.log("Number is:" , n);
console.log("Prime digits of the numbers are:");
for(let i=1 ; n>0 ; i++){
    let a=n%10;
    let c = 0;
    for(let j=1 ; j<=a ; j++){
        if(a%j==0){
            c++;
        }
    }
    if(c==2){
        console.log(a);
    }
    n=parseInt(n/10);
}