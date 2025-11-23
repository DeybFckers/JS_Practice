//JSON parsing Read

/* when you are doing a parsing the position like this key:VALUE.
redecalring they key is allowed but it will overwrite and bugs
so it should be unique */

let person = {
    firstName:"David",
    lastName:"SDPT",
    age:22,
    bloodType: "O",
    sex: "M"

};

console.log(person);

//first json
let persons = {
    firstName:"David",
    lastName:"SDPT",
    age:22,
    //with array
    hobbies: ["Coding", "Eating", "Sleeping"],
    //you can json inside the json
    //second json
    pets: {
        0:{
            name: "Shadow",
            type: "Dog",
        },
        1:{
            name: "Mocha",
            type: "Cat",
        }
    }
};

console.log(persons);

/*you can read a specific values of json,
First way is using the key and surrounded by [] 
like this variable[key],
Second way is using the period followed by they key, 
like this variable.key but it only works on String not in numbers,
third way is like this`${variable.keyvalue}`, normalize using 
third way so it wont confused when it comes to flutter
*/

//using the first way
//if the key is number you should use first way
console.log(persons["firstName"]);

//usibng the second way
console.log(persons.lastName);

// you can get this also
/* always use this or normalize so you wont
confused when it comes to flutter */
console.log(`${persons.firstName} ${persons.lastName}`);

//getting a specific value in array, you can use first way and second way third way
//first way
console.log(persons["hobbies"][2]);
//second way
console.log(persons.hobbies[1]);
//third way
console.log(`${persons.hobbies[0]}`)

//you can read a specific value of json inside the json
//using first way
console.log(persons["pets"][1]["name"]);
//using second way
console.log(persons.pets[1].name);
//using third way
console.log(`${persons.pets[1].name}`);

//JSON parsing write
//updating a new value in key
persons["firstName"] = "Alenere";
console.log(persons);
//you can also use the period notation or second way
persons.lastName = "SPDT";
console.log(persons)
//updating in array
persons.hobbies[0] = "Playing";

//creating a new Key|value in json
persons["middleInitial"] = "F";
console.log(persons);
//using second way
persons.middleInitial = "D";
console.log(persons);

//continue JSON STRINGIFY - 34 mins and 3 secs