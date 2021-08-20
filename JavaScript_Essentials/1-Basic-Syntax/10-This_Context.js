

// this refers to window object
// console.log(this);

var object = {
    prop: this,
    embed: {
        embed: true,
        // when inside the callable object this refers to outer scope
        method: function () { return this; }
    }

};

var array = [this, function () { return this; }];

function global() {

    console.log("from global", this);

    function sub() { console.log("from sub", this) }; // logs the window object because it called without new

    sub();
}

console.log(global.call(object)); // logs the object
console.log(new global()); // logs the new global object

console.log(object.prop); // logs the window object
console.log(object.embed.method()); // logs the object 