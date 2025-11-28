//document object model

// using querySelector
// to get the id you should use #
let e = document.querySelector("#second-heading");
console.log(e);
//to get the comment you should use .(dot)
let a = document.querySelector(".comment");
console.log(a);
//you can also use querySelectorAll to get all the tags
//and you dont need an # .(dot)
let allH1 = document.querySelectorAll("h1");
console.log(allH1);

//using getElementsBy you dont need an dot,#
//to get an id using ElementById
let fHeading = document.getElementById("first-heading");
console.log(fHeading);
let sHeading = document.getElementById("second-heading");
console.log(sHeading);

//to get the all Tags using TagName
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);

//to get all the classname using getElementsByClassName
let comments = document.getElementsByClassName("comment");
console.log(comments);
/*if you want to get a specific comments
you can do it like indexing array*/
console.log(comments[1]);

//manipulating html using javascript
//changing the text
let thirdHeading = document.getElementById("third-heading");
thirdHeading.innerHTML = "Manipulated By Js Now";

let descriptions = document.getElementsByClassName("desc");
descriptions[0].innerHTML = 'Manipulated By js Now';
descriptions[1].innerHTML = 'Manipulated By js Now';

//changing the input type
let txtFirstName = document.getElementById("txtFirstName");
txtFirstName.placeholder = "First Name";

//changing the image
let img = document.getElementById("img-example");
img.src = "https://media.licdn.com/dms/image/v2/C510BAQGPbBfXwVQWsw/company-logo_200_200/company-logo_200_200/0/1630615726618?e=2147483647&v=beta&t=-3VRvbntJRV_jbEqfCU7K-ZMkElEic8zhVnOUxtK95o"

let link = document.querySelector("#example-link");
link.href = "https://www.youtube.com";
link.target = "_blank";
link.innerHTML = "SDPT Solutions";

//Manipulate styles using javascript
//always use style
let b = document.querySelector("body");
b.style.backgroundColor = "rgba(63, 63, 63, 1)"

let h1 = document.querySelector("h1");
h1.style.textAlign = "center";
h1.style.fontFamily = "Montserrat";
h1.style.color = "gold";
h1.style.borderBottom = "2px solid gold";