const person = {
    firstname: "Ram",
    lastname: "Roy",
    age: 20,
    display: function(){
        console.log(this.firstname+" "+this.lastname+" is "+this.age+" years old ");
    }
}
//person.display();
const rohit = person;
console.log(rohit);
rohit.display();