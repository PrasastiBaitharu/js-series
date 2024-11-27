const arr = [1,2,3,4,5,6,7,8,9,10];
function changeArray(x){
    x=x+10;
    return x;
}
const result = arr.map(changeArray);
console.log(arr);
console.log(result);