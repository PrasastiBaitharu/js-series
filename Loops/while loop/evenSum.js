console.log("Even numbers from 1 to 10 are:");
let s=0;
let i=1;
while(i<=10){
    if(i%2==0){
        console.log(i);
        s=s+i;
    }
    i++;
}
console.log("Sum of even number:" , s);