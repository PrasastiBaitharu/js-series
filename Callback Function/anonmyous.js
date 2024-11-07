function show(){
    return function (){
        console.log("Hello World");
    }
}
const res = show();
console.log(res);
res();