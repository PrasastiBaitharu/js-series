function display(callback){
    callback();
    console.log("World");
}
display(function (){
    console.log("Hello");
})