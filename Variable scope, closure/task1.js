/**
 * Task description: The function sayHi uses an external variable name.
 * When the function runs, which value is it going to use?
 * So, the question is: does it pick up the latest changes?
 * The answer: Yes
 */
let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); //Hi, Pete
