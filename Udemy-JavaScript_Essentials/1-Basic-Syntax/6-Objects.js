
var car = {
    color: "red",
    speed: 102,
    maker: "Volvo",
    engine: {
        hp: 250,
        size: 3.0,
        maker: "BMW",
        pistons: [{ maker: "BMW" }, { maker: "BMW" }]
    },
    drive: function () { return "drive"; }
};


console.log(car.color);
console.log(car.drive());
console.log(car["maker"]);
console.log(car.engine.pistons[0].maker);

car.maker = "ford";
console.log(car.maker);

car.speed *= 2;
console.log(car.speed);

car.model = "v60"; // added new member
console.log(car.model);

car.stop = function () { return "stop"; }; // added new method
console.log(car.stop());

delete car.color; // deleted member


// Callable Objects
console.log();

function name(fullName) {
    return fullName();
}

console.log(name(function () { return "embed"; })); // doesn't need a name 