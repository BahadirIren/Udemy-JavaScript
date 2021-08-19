
// function printName() {
//     return "Bahadir Iren";
// }

// var myName;  it doesn't initialized so this is undefined

console.log(myName, printName());

// this variable got hoisted to line 6
var myName = "Bahadir";

// this function got hoiested to the line 2 (got hoisted above the line where it called)
function printName() {
    return "Bahadir Iren";
}