
// Array
var array = ["apple", 100, ["embed", 200], { car: "ford" }, function () { return "drive"; }];

console.log(array);
console.log(array[3].car);
console.log(array[4]());
console.log(array[1 + 1 - 2]);

array[0] = "new string";
console.log(array[0]);

array.shift(); // removed the first element of the array
console.log(array);

array.unshift("bahadir", 120); // inserted to the beginning
console.log(array);

array.pop(); // removed the last element of the array
console.log(array);

array.push("Iren", 12.4); // inserted to the end of the array
console.log(array);

array.splice(3, 2); // begins deleting at the index 2, and delete 2 item
console.log(array);

// it is like insert at the index 1 and reorder the rest array (hello, world and 12 will be added)
array.splice(1, 0, "hello", "world", 12); // begins at the index 1, and delete 0 item, adds the rest
console.log(array);

array.splice(2, 2, "world200"); // begins at the index 2 and deletes 2 items and adds the word
console.log(array);