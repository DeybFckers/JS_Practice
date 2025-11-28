//functions of javascript

function sayHello(){
    console.log("Hello!");
}

for(let i = 0; i < 5; i++){
    sayHello();
}

function add(num1, num2){
    sum = num1 + num2;
    console.log(sum);
}

function subtract(num1, num2){
    diff = num1 - num2;
    console.log(diff)
}

function multiply(num1, num2){
    prod = num1 * num2;
    console.log(prod)
}

function divide(num1, num2){
    quotient = num1 / num2;
    console.log(quotient)
}

let n = ["David", "Alenere","Jaymar"];
let lastName = "SDPT";

function printNames(name){
    for(let i = 0; i < name.length; i++){
        console.log(name[i] + " " + lastName)
    }
}

printNames(n);

function add1(num1, num2){
    return num1 + num2;
}

sum = add1(5,10);
console.log(sum);

//Challenge
let numbers = [1,2,3,4,5,6];

function summation(num1){
    let sum = 0;
    for(let i = 0; i < num1.length; i++ ){
       sum += num1[i];
    }
    return sum;
}

let total = summation(numbers)
console.log(total);

/*in conclusion the C# and Javascript functions are same but 
when you create a functions are not same, so for example
in c# you should use public void classname(parameters){functions
but you can't declare a return unless you use a datatypes instead of void}
in Javascript you are enable to use a return in functions, even you dont declare
a functions same with c#, so it should be like this functions classname(parameters){
functions}*/
