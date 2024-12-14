const person = {
    "firstName" : "Prasasti",
    "lastName" : "Baitharu",
    "age" : 20
};
let key = "gender";
let value = "male";
person[key] = value;
for(let key in person){
    console.log(person[key]);
}