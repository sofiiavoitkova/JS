/**
 * Task description: Write function sum that works like this: sum(a)(b) = a+b.
 * Expected Result: 3, 4
 * @param {number} a - The first number to add
 * @returns {function} - A function that takes the second number and returns the sum of both numbers
 */

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));
