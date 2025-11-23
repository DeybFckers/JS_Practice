//all if else conditionals in programming are same

let age = 12;

if(age >= 18){
    alert("Legal age");
}else{
    alert("Minor");
}

age = 18;

if(age >= 18){
    alert("Legal Age");
}else{
    alert("Minor")
}

//Challenge

let science = 95;
let math = 93;
let english = 97;
let computer = 94;

let average = (science + math + english + computer) / 4;
alert(average);
if(average > 101){
    console.log("Invalid Grade");
}else if(average >= 98){
    console.log("With Highest Honor");
}else if(average >= 95){
    console.log("With High Honor");
}else if(average >= 90){
    console.log("With Honor");
}else if(average >= 75){
    console.log("Passed");
}else if(average <= 74){
    console.log("Failed");
}