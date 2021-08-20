
var select = document.getElementsByName("cars")[0];

select.onclick = function (event) { console.log(event); };

function clickCallBack(event) {
    console.log("clicked by add event listener");
}

// we can't add symbolName to this function so we created another function and passed
// select.addEventListener("click", function (event) {
//     console.log("clicked by add event listener");
// })
select.addEventListener("click", clickCallBack);


// in order to remove event listener we need symbolName 
// select.removeEventListener("click", clickCallBack);