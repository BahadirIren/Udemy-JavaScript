
function denetle() {
    let elements = document.getElementsByClassName("zorunlu");
    let status = true;

    for (let i = 0; i < elements.length; i++) {
        status = elementDoluMu(elements[i].id) && status;
    }
    return status;
}

function elementDoluMu(id) {
    let status = false;
    let inputElement = document.getElementById(id);
    let deger = inputElement.value;

    if (deger === "") {
        let hataMesaji = inputElement.getAttribute("data-mesaj");
        let hedef = inputElement.getAttribute("data-hedef");
        document.getElementById(hedef).innerText = hataMesaji;
        inputElement.addEventListener("change", function () {
            document.getElementById(hedef).innerText = "";
        });
        status = false;
    } else {
        status = true;
    }
    return status;
}