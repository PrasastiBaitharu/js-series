let studName = "Prasasti";
let sname = "";
for(let i=0 ; i<studName.length ; i++){
    if(studName[i]==="a"){
        sname = sname + "A";
    }else{
        sname = sname + studName[i];
    }
}
console.log(sname);