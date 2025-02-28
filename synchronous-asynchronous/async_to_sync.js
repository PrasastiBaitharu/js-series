//Async to sync

function register(callback){
    setTimeout(() => {
        console.log("Register end");
        callback();
    }, 1000);
}

function sendMail(callback){
    setTimeout(() => {
        console.log("Get mail end");
        callback();
    }, 1000);
}

function login(callback){
    setTimeout(() => {
        console.log("Login end");
        callback();
    }, 3000);
}

function getData(callback){
    setTimeout(() => {
        console.log("Get data end");
        callback();
    }, 1000);
}

function displayData(){
    setTimeout(() => {
        console.log("Display data end");
    }, 1000);
}

register(function(){
    sendMail(function(){
        login(function(){
            getData(function(){
                displayData()
            })
        })
    })
});

//BUT It was creating a callback hell 
//To avoid the callback hell javascript has given the facility of promise
