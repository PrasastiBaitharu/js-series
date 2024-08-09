let n = [10,20,30,40,50,60];
console.log("Before swapping array",n);
if(n.length%2==0){
    m=n.length-1;
    for(let i=0 ; i<m ; i++){
        let c = n[i];
        n[i] = n[m];
        n[m] = c;
        m=m-1;
    }
    console.log("After swapping array",n);
}else{
    console.log("Length of an array is odd");
}