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
const myarith = {...myopr1,...myopr2};
const add = myarith.add;
const subtract = myarith.subtract;
const mul = myarith.mul;
const div = myarith.div;

console.log(myarith);
add(10,20);
subtract(10,20);
console.log(mul(10,20));
console.log(div(20,10));