let n = [10,20,30,40,3,5];
let c = 0;
for(let i = n.length-1 ; i>=0 ; i--){
    if(n[i]<n[0]){
        c++;
    }else{
        break;
    }
}
console.log("Number of rotation is: " , c);