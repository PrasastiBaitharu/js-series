let str = "It is a cat";
let str1 = "";
for(let i=0 ; i<str.length ; i++){
    if(str[i]==="i" , str[i+1] === "s"){
        str1 = str1 + "am";
        i++;
    }else{
        str1 = str1 + str[i];
    }
}
console.log(str1);