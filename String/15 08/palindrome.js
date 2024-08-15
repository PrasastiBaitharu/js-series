let studName = "madam";
let rname = "";
for(let i = studName.length-1 ; i>=0 ; i--){
    rname += studName[i];
}
if(rname === studName){
    console.log("String is palindrome");
}else{
    console.log("String is not palindrome");
}