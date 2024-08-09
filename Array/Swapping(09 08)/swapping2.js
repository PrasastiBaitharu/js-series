let n = [10,20,30,40,50,60];
console.log("Before swapping array",n);
if(n.length % 2 == 0){
    for(let i = 0 ; i<n.length ; i = i +2 ){
        let c = n[i];
        n[i] = n[i + 1];
        n[i + 1] = c;
    }
    console.log("After swapping array",n);
}else{
    console.log("Length of the given array is odd");
}