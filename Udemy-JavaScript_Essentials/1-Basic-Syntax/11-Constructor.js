
// constructor
function Apple(color, weight) {
    this.color = color;
    this.weight = weight;

}

Apple.prototype = {
    callBase: function () { return this; }, // it will allow you to go to the instance level
    eat: function () { return "eat the apple"; },
    throw: function () { return "throw the apple"; },
};


var apple1 = new Apple("red", 200);
var apple2 = new Apple("green", 400);
var apple3 = new Apple("blue", 500);

console.log(apple1);
console.log(apple1.eat());

Apple.prototype.eat = function () { return "new apple eaten" };

console.log(apple1.eat());

console.log(apple1.callBase()); // logs the apple1 object


