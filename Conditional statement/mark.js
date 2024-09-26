let eng = 80;
let math = 60;
let cs = 95;
let sci = 75;
let odia = 85;
console.log("English:" , eng);
console.log("Maths:" , math);
console.log("Computer science:" , cs);
console.log("Science:" , sci);
console.log("Odia:" , odia);
let total = eng + math + cs + sci + odia ;
console.log("Total marks:" , total);
let per = total/500*100;
console.log("Percentage:" , per);
if(per>=60 && per<=100){
    console.log("First division");
}else if(per>=50 && per<60){
    console.log("Second division");
}else if(per>=40 && per<50){
    console.log("Third division");
}else if(per<40 && per>=0){
    console.log("FAIL");
}else{
    console.log("Invalid marks");
}