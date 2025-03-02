//Now the promise will reject
function register (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Register end");
            resolve()
        }, 1000);
    })
}

function sendMail(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Send mail end");
            resolve()
        }, 1000);
    })
}

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            return reject("Code crashed")
            console.log("Login end");
        }, 3000);
    })
}

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Get data end");
            resolve();
        }, 1000);
    })
}

function displayData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Display data end");
            resolve();
        }, 1000);
    })
}

register()
.then(sendMail)
.then(login)
.then(getData)
.then(displayData)
.catch((e)=>{
    console.log("ERROR",e)
})