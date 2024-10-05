//Take any 4 digit number and display the prime digit
let n = 1234;
console.log("Number is:" , n);
console.log("Prime digits of the numbers are:");
while(n>0){
    let a=n%10;
    let c = 0;
    let j=1;
    while(j<=a){
        if(a%j==0){
            c++;
        }
        j++;
    }
    if(c==2){
        console.log(a);
    }
    n=parseInt(n/10);
}