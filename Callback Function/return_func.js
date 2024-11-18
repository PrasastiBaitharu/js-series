function show(){
    function display(){
        console.log("Hello World");
    }
    return display;
}
const res = show();
console.log(res);
res();