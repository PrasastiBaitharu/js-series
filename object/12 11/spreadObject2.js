const person = {
    "firstName" : "Prasasti",
    "lastName" : "Baitharu",
    "age" : 20
};
const address = {
    "city" : "sbp",
    "State" : "Odisha"
}
let person1 = {...person,...address};
console.log(person1);