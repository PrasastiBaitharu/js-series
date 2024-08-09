let n = [10,20,30,40,50,60];
console.log("Before swapping array",n);
if(n.length % 2 == 0){
    let r = n.length/2;
    for(let i=0 ; i<r ; i++){
        c = n[i];
        n[i] = n[i+r];
        n[i+r] = c;
    }
    console.log("After swapping array",n);
}else{
    console.log("Length of array is odd");
}