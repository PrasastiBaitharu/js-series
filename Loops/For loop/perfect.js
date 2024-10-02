let n=6;
let s=0;
console.log("Number =" , n);
for(let i=1 ; i<=n ; i++){
    if(n%i==0){
        s=s+i;
    }
}
console.log("Sum =" , s);
if(n*2==s){
    console.log(n ,"is a perfect number")
}else{
    console.log(n , "is not a perfect number")
}