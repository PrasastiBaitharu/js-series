const arr = [1,2,3,4,5,6,7,8,9,10];
function changeArray(x){
    return x+10;
}
const result = arr.map(changeArray);
console.log(arr);
console.log(result);