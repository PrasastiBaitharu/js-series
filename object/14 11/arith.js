const myopr1 ={
    add : function(a,b){
        console.log("Sum is :" , a+b);
    },
    subtract : function(a,b){
        console.log("Difference is :" , a-b);
    }
};
const myopr2 ={
    mul : function(a,b){
        return a*b;
    },
    div : function(a,b){
        return a/b;
    }
};
myarith = {};
myarith.add = myopr1.add;
myarith.subtract = myopr1.subtract;
myarith.mul = myopr2.mul;
myarith.div = myopr2.div;


console.log(myarith);
myarith.add(10,20);
myarith.subtract(10,20);
console.log(myarith.mul(10,20));
console.log(myarith.div(20,10));