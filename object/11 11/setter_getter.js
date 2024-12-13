const person ={
    setFirstName : function(fname){
        this.firstname = fname;
    },
    setLastName : function(lname){
        this.lastname = lname;
    },
    getFullName : function (){
        return this.firstname + " " + this.lastname;
    }
}
person.setFirstName("Ram");
person.setLastName("Roy");
const FullName = person.getFullName();
console.log("Your name is" , FullName)