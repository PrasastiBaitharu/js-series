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
console.log(myarith);
myarith.add(10,20);
myarith.subtract(10,20);
console.log(myarith.mul(10,20));
console.log(myarith.div(20,10));
console.log(myopr1.add);