//conversion
/*JavaScript and Dart are almost same, in Dart you need to put 
a decimal before the Datatypes, which is like this parse.Int
in c# Convert.toInt32, etc */

//Unsuccessful conversion will be NaN(Not a Number)

//String to Int
let num1 = "12";
let num2 = 2;

//this is allowed to convert
alert(parseInt(num1) + num2);

//reassigning conversion
num1 = parseInt(num1);

alert(num1 + num2);

//String to float
let num3 = "15.99";
let num4 = 0.01;

num3 = parseFloat(num3);
alert(num3 + num4);

//Operators

//Addition
alert(num1 + num2);
//Subtraction
alert(num1 - num2);
//Multiplication
alert(num1 * num2);
//Division
alert(num1 / num2);
//Modulus - remainder
alert(num1 % num2);
//Exponent
alert(num1 ** num2);

//PEMDAS METHOD SAME WITH C#
alert((num1 - num2) + num2 ** num2);

//Increment/Decrement Same all language
num1++; //plus one
num2--; //minuse one

//Challenge

let science = 95;
let math = 93;
let english = 97;
let computer = 94;

let average = (science + math + english + computer) / 4;

alert("Average: "+average)