/**
 * Task description: There are two arrays with individual values. Write a JavaScript program to compute
 * the sum of each individual index value in the given array.
 * Expected Result: [4, 5, 8, 10, 12, 13]
 * @param {Array} array1 - The first array with individual values
 * @param {Array} array2 - The second array with individual values
 * @returns {Array} - The array with the sum of each individual index value
 */
let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];

function sum(array1, array2) {
  let result = [];

  let i = 0;

  if (array1.length === 0 || array2.length === 0) {
    return "Please provide non-empty arrays";
  }

  while (i < array1.length && i < array2.length) {
    result.push(array1[i] + array2[i]);
    i++;
  }

  if (i === array1.length) {
    for (i; i < array2.length; i++) {
      result.push(array2[i]);
    }
  }

  if (i === array2.length) {
    for (i; i < array1.length; i++) {
      result.push(array1[i]);
    }
  }

  return result;
}

console.log(sum(array1, array2));
