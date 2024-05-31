/**
 * Task description: Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.
 * @param {Function} f - The function to be wrapped
 * @param {number} ms - The number of milliseconds to delay the function call
 * @returns {Function} - A function that delays the call to the original function by the specified milliseconds
 */
function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

let f1000 = delay(console.log, 1000);
let f1500 = delay(console.log, 1500);

f1000("test");
f1500("test");
