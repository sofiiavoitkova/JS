/**
 * Task description: We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f.
 * If it returns true, then that element is returned in the resulting array.
 * Make a set of “ready to use” filters:
 * 1. inBetween(a, b) – between a and b or equal to them (inclusively).
 * 2. inArray([...]) – in the given array.
 * Expected Result: 3,4,5,6
 *                  1,2
 * @param {number} start - The start of the range.
 * @param {number} end - The end of the range.
 * @returns {function} - A function that takes a number and returns true if the number is between a and b.
 *
 * @param {Array} arr - The array of numbers to check against.
 * @returns {function} - A function that takes a number and returns true if the number is in the array.
 */
//1
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

console.log(arr.filter(inBetween(3, 6)));

//2
let arr1 = [1, 2, 3, 4, 5, 6, 7];

function inArray(arr) {
  return function (y) {
    return arr.includes(y);
  };
}

console.log(arr1.filter(inArray([1, 2, 10])));
