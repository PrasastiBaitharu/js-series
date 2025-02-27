//Converting asynchronous to synchornous

function register(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Register end");
            resolve();
        },1000);
    })
    
}
function sendMail(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Send Mail end");
            resolve();
        },1000);
    })
}
function login(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Login end");
            resolve();
        },3000);
    })
    
}
function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Get Data end");
            resolve();
        },1000);
    })
}
function displayData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Display Data end");
            resolve();
        },1000);
    })
}
register()
.then(sendMail)
.then(login)
.then(getData)
.then(displayData)


console.log("Other applications executed");