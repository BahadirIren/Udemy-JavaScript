
var pHello = document.getElementById("header");

pHello.innerText += " new World";

// pHello.innerText += " order <span>hello world</span>";
pHello.innerHTML += " order <span>hello world</span>"; // use innerHTML to use HTML tag inside text

// use this to change HTML tags
// pHello.outerHTML = '<p id="header" style="text-align:center">My First Website with outerHTML</p>';

var spanP = document.querySelectorAll("p span")[0]; // return array be careful

spanP.innerHTML = "new text here!";
console.dir(spanP);