const circle  = function(r){
    let pi = 3.14;
    let area = pi * r * r;
    return area;
}
let r = 10;
console.log("Radius of the circle:" , r);
let a = circle(r);
console.log("Area of the circle :" , a);