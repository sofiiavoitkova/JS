//Type coercion

const age = 20;
const isUserLoggedIn = false;

if (age) {
  console.log("true");
}

//0, -0, Nan, underfined, null, ''(empty string) => false(during the inspection)

let num = 10;
let str = "vitaly";
console.log(num + str);

// let n = {}; //[object Object]
// let s = "vitaly";
// console.log(n + s);

let num1 = 10;
let num2 = "2";
console.log(num1 - num2);

let num3 = "hello";
console.log(num3.toUpperCase());

let num4 = 10.6;
console.log(num4.toFixed());

let num5 = 10;
let num6 = null;
console.log(num5 + num6); //null => 0, undefined => Nan, true => 1

let num7 = 10;
let num8 = "10";
console.log(num7 === num8); //false
