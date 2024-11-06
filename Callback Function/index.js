function show(){
    console.log("World");
}
function display(arg){
    arg();
    console.log(arg);
}
console.log(show);
display(show);