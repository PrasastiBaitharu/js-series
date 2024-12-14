let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3 =[];
for( i=0 ; i<3 ; i++){ //bydefault it is var
    arr3[i] = arr1[i]
}
var j=i;
for(let i=0 ; i<3 ;i++){
    arr3[j] = arr2[i];
    j++;
}
console.log(arr3);