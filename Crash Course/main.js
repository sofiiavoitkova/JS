// alert("Hello World");
// console.log("Hello World");
// console.error("This is an warning");
// console.warn('This is a warning');

//STRINGS
const s = "Hello World!";
const t = "technology, computers, it, code";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(""));
console.log(t.split(", "));

//ARRAYS - variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ["apples", "oranges", "pears"];
console.log(fruits[1]);
fruits[3] = "grapes";
fruits.push("mangos");
fruits.unshift("strawberries");
fruits.pop();
console.log(Array.isArray(fruits)); //checks whether the passed value is an array
console.log(Array.isArray("hello")); //false
console.log(fruits.indexOf("oranges"));
console.log(fruits);
