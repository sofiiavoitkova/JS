/**
 * Task description: Write a JavaScript function to find unique elements in two arrays.
 * Expected Result: ["1", "2", "3", "10", "100"]
 *                  ["1", "2", "3", "4", "5", "6"]
 *                  ["1", "2", "3", "10", "100"]
 * @param {Array} arr - The input array
 * @returns {Array} - An array containing the union of two arrays
 */

function difference(array1, array2) {
  let union = array1.concat(array2.flat(Infinity));

  union.sort((a, b) => a - b);

  return Array.from(new Set(union));
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
