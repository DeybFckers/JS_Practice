function initializePage(){
    let title = document.querySelector(".title");
    title.innerHTML = "HELLO WORLD!";
}

//if you want to click you can use onclick
function sayHello(){
    let title = document.querySelector(".title");
    title.innerHTML = "Hello!";
}

//you want to change without clicking use onmouseover
function hoverText(){
    let p = document.querySelector("p");
    p.innerHTML = "YOU HOVERED ME!";
}

function unhoverText(){
    let p = document.querySelector(".out")
    p.innerHTML = "DONT LEAVE ME!";
}

function newhoverText(){
    let p = document.querySelector(".out");
    p.innerHTML = "YOU HOVERED ME!";
}

function clickText(){
    let p = document.querySelector(".out");
    p.style.color = "pink";
}
//onfocus wont work on button
function triggerFocus(){
    let inp = document.querySelector("input");
    inp.style.color = "blue";
    inp.style.backgroundColor = "black";
}

function triggerBlur(){
    let inp = document.querySelector("input");
    inp.style.color = "pink";
    inp.style.backgroundColor = "grey";
}