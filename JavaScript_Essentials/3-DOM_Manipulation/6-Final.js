
let elements = document.getElementsByName("cssProperty");
let div = document.getElementById("modify");

function set() {
    elements.forEach(element => {
        let cssProperty = element.id;
        let cssValue = element.value;

        // console.log(cssProperty + " " + cssValue);
        // div.style["background"] = "orange";
        div.style[cssProperty] = cssValue;
    });
}

document.getElementById("set").addEventListener("click", set);

/// comment