/**
 * Task description: Write function sum that would work like this:
 * sum(1)(2) == 3; // 1 + 2
 * sum(1)(2)(3) == 6; // 1 + 2 + 3
 * sum(5)(-1)(2) == 6
 * sum(6)(-1)(-2)(-3) == 0
 * sum(0)(1)(2)(3)(4)(5) == 15
 * @param {number} a - The first number to be summed
 * @returns {Function} - a function that adds another number or returns the sum if there is no more numbers to add
 */
function sum(a) {
  let sum = a;

  function addNumber(b) {
    sum += b;
    return addNumber;
  }

  addNumber.result = function () {
    return sum;
  };

  return addNumber;
}

console.log(sum(1)(2).result());
console.log(sum(5)(-1)(2).result());
console.log(sum(6)(-1)(-2)(-3).result());
console.log(sum(0)(1)(2)(3)(4)(5).result());
