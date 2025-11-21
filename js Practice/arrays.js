/*JavaScript and Dart are same method when you declare an array,
and C# is different you need to do it like this
Datatypes[] variable = {} */ 

let names = ["David", "alenere", "Jaymar", "Maye"];
let numbers = [2,4,6,8,10];
let mix = [true, 2.46, "David"];

//you can use a variable.length to get length of array
//update array or changing value 

names[1] = "sentra";
alert(names);

/*getting a specific value of array you need to do it like this
variable[index] same with C# */
alert(names[3]);

let numbers1 = [13,24,36,48];
//updating array are same method with c#
numbers1[1] = 29;
alert(numbers1);

//adding an arrays method
let cars = ["Toyota", "Suzuki"];
alert(cars)
//using length
cars[cars.length] = "Ferrari";
alert(cars);
//using push are just same on length but not same position
cars.push("Lamborghini")
alert(cars);
//using unshift it will be add and move it into first
cars.unshift("Pagani");
alert(cars);

//Deleting an Arrays method
//Using length method
//you have to be careful between getting an array and delete
cars.length = 2;
alert(cars);

//Using pop method
//it will delete the last record
cars.pop();
alert(cars);

//using shift method
//it will delete the first record
cars.shift();
alert(cars);

//using slice method
//it means you want to delete a record Except the value that you want
let newCars = ["Vios","Honda", "Hilux", "Raptor"];
alert(newCars);
                    //start, end
newCars = newCars.slice(0,2);
alert(newCars)

//Challenge

let firstName = ["David", "Alenere"];
let lastName = ["SDPT", "TPDS"];
let age = [22,23];

let index = 0;

alert("Index: " + index + " " +
      "First Name: " + firstName[index] + " " +
      "Last Name: " + lastName[index] + " " +
      "Age: " + age[index]
);