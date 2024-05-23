/**
 * Task description: Modify the code of makeCounter() so that the counter can also decrease and set the number:
 * 1. counter() should return the next number (as before).
 * 2. counter.set(value) should set the counter to value.
 * 3. counter.decrease() should decrease the counter by 1.
 *  @returns {Function} - function that implements the counter functionality
 */
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = function (value) {
    count = value;
  };

  counter.decrease = function () {
    count--;
  };

  return counter;
}

let counter = makeCounter();

console.log(counter());

counter.set(10);
console.log(counter());

counter.decrease();
console.log(counter());
