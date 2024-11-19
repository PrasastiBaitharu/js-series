function show(){
    return function display(){
        console.log("Hello World");
    }
}
const res = show();
console.log(res);
res();