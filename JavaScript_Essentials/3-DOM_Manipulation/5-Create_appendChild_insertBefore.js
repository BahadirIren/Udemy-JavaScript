
var element = document.createElement("div");

element.style.cssText = "width:200px; height:20px; background:blue;";

element.onclick = function () { alert("Hello"); };

// document.body.appendChild(element);

var target = document.getElementById("yellow");

document.body.insertBefore(element, target);