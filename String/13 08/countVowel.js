let studName = "Prasasti";
let c = 0;
for(let i=0 ; i<studName.length ; i++){
    if(studName[i]=="a"|| studName[i]=="e" || studName[i] == "i" || studName[i] == "o" || studName[i] == "u" || studName[i] == "A" || studName[i] == "E" || studName[i] == "I" || studName[i] == "O" || studName[i] == "U" ){
        c++;
    }
}
console.log("Number of vowels are " , c);