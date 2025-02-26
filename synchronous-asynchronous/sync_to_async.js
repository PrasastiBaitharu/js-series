//converting synchronous to asynchronous

function register(){
    setTimeout(()=>{
        console.log("Register end")
    },1000);
};

function sendMail(){
    setTimeout(() => {
        console.log("Send mail end")
    }, 1000);
};

function login(){
    setTimeout(() => {
        console.log("Login end")
    }, 3000);
};

function getData(){
    setTimeout(() => {
        console.log("Get data end")
    }, 1000);
};

function displayData(){
    setTimeout(() => {
        console.log("Display data end")
    }, 1000);
};

register()
sendMail()
login()
getData()
displayData()

console.log("Others application executed");