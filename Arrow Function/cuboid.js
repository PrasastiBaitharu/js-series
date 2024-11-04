const cuboid  = (l,b,h) => {
    let tsa = 2*(l*b + b*h + h*l);
    return tsa;
}
let l = 20;
let b = 30;
let h = 40;
console.log("Length:" , l);
console.log("Breadth:" , b);
console.log("Height:" , h);
let r = cuboid(l,b,h);
console.log("Total surface area of the cuboid:" , r);