
let letSymbol = "scoped value"; // creates a variable which is not accessible outside the scope

var symbolName = "value reference in memory"; // creates a variable which is accessible outside the scope

const constantName = "some constant name"; // is not accessible outside the scope
// use let inside for loops

if (true) {

    let letName = "Bahadir";
    var varName = "Ahmed";
    const conName = "Semih";
}

//console.log(letName); // produces error
console.log(varName);
console.log(conName); // produces error

function fn() {
    // both of them are not accessible outside the scope
    let letFnName = "Bahadir";
    var varFnName = "Ahmed";
}

// both of them produce errors
// console.log(letFnName);
// console.log(varFnName); 