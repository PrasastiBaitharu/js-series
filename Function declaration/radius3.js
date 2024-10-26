function areaCircle (){
    let r = 10;
    let pi = 3.14;
    let area = pi * r * r;
    console.log("Radius of the circle :" , r);
    return area;
}
let r = areaCircle();
console.log("Area of the circle :" , r);