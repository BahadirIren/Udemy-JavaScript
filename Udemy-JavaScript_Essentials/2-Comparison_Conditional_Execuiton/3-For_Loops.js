
var classRegister = ["Bahadir", "Ahmed", "Semih"];

for (let i = 0; i < classRegister.length; i++) {

    console.log(classRegister[i]);
}
console.log();

for (let i = classRegister.length - 1; i >= 0; i--) {
    console.log(classRegister[i]);
}
console.log();

// for in loop
for (let index in classRegister) {
    console.log(classRegister[index]);
}
console.log();

// for each loop
classRegister.forEach(element => {
    console.log(element);
});