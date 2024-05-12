/**
 * Task description: Write a JavaScript program to compute the union of two arrays
 * Expected Result: [1, 2, 3, 10, 100]
 * @param {Array} arr - The input array
 * @returns {Array} - An array containing the union of two arrays
 */

function union(array1, array2) {
  let union = array1.concat(array2);

  union.sort((a, b) => a - b);

  return Array.from(new Set(union));
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));
