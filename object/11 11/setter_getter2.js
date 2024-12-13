const person ={
    setFirstName :(fname) => {
        this.firstname = fname;
    },
    setLastName : (lname) => {
        this.lastname = lname;
    },
    getFullName :  () => {
        return this.firstname + " " + this.lastname;
    }
}
person.setFirstName("Ram");
person.setLastName("Roy");
const FullName = person.getFullName();
console.log("Your name is" , FullName);