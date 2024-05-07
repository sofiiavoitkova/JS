/**
 * Task description: Write a JavaScript function to find the difference between two arrays.
 * Expected Result: ["3", "10", "100"]
 *                  ["6"]
 *                  ["3", "10", "100"]
 * @param {Array} array1 - The first input array
 * @param {Array} array2 - The second input array
 * @returns {Array} - An array containing the difference between the two input arrays
 */

function difference(array1, array2) {
  let result = [];

  array1 = array1.flat(Infinity);
  //console.log(array1);

  array2 = array2.flat(Infinity);
  //console.log(array2);

  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      result.push(array1[i]);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) {
      result.push(array2[i]);
    }
  }

  result.sort((a, b) => a - b);

  return result;
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
