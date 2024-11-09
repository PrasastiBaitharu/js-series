function show(name){
    console.log("Hello", name);
}
function display(callback){
    callback("Ram");
    console.log("World");
}
display(show);