let str = "Hello world";
let c = 0;
for(let i=0 ; i<str.length ; i++){
    if(str[i] == " "){
        c++
    }
}
console.log("Number of words are " , c+1);