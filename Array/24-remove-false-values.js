/**
 * Task description: Write a JavaScript function to remove 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
 * Expected Result: [15, -22, 47]
 * @param {Array} array - The input array
 * @returns {Array} - An array without falsy values
 */

//the 1st way
arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function remove(array) {
  return array.filter(Boolean);
}

console.log(remove(arr));

//the 2nd way
arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];

let result = [];

function remove(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(remove(arr));
