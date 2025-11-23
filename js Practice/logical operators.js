let age = 18;
let experience = 3;
let language = "C#";

//using &&/and operators to become true and needs to meet all the conditional
//if one condition is false and other condtion is true automatically false
alert(age >= 18 && experience > 1 && language === "C++");

    //since all this conditional is true
if(age >= 18 && experience > 1 && language === "C#"){
    alert("You are Qualified for the Job"); // it will print this
}else{
    alert("You are not qualift for the job");
}

//using ||/or operators
//if one condition is equal and other condition is false, still the result is true
//in short as long as one condition is meet or true, still true
    //true      //false
if(age >= 18 || language === "C++"){
    alert("You are Qualified for the Job"); // it will still print this because theres a true in condition
}else{
    alert("You are not qualift for the job");
}

//using ! operators it means vice versa
let isTall = false; //false

// i used ! it means true
alert(!isTall)

//nested if else conditional
//true
if(age >= 18){
    //true
    if(experience > 1){
        //it will print this
        alert("You are Qualified for the Job");
    //if the second conditional is false
    }else{
        //it will print this
        alert("You are not qualified for the job");
    }
//if the first conditional is false
}else {
    //it will print this
    alert("You are minor")
}

//Challenge

let age1 = 12; 
let isRegistered = true; 

// Case: 18 or older
if (age1 >= 18) {
    if (isRegistered) {
        alert("Valid Voter");
    } else {
        alert("Register First");
    }
}
// Case: Below 18
else {
    if (isRegistered) {
        alert("Invalid Voter"); // Registered but under 18
    } else {
        alert("Non Voter"); // Not registered and under 18
    }
}
