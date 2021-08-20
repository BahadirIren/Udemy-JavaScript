
var engine = {
    maker: "Ford",
    headGasket: {
        pots: ["piston1", "piston2"]
    }
}


function runExpression() {
    var a = 10;

    function add() {
        var b = 90

        return a + b;
    }

    return add();
}


console.log(engine[0]);
console.log(engine.headGasket.pots[0]);

console.log(runExpression());