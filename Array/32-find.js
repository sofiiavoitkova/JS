/**
 * Task description: Write a JavaScript function to find an array containing a specific element.
 * Expected Result: [True]
 * @param {Array} arr - The input array
 * @param {number} n - The element to search for
 * @returns {boolean} - True if the element is found, otherwise false
 */
//the 1st way
let arr = [2, 5, 9, 6];

function contains(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return true;
    }
  }

  return false;
}

console.log(contains(arr, 5));

//the 2nd way
let arr1 = [2, 5, 9, 6];

function contains(arr, n) {
  return arr1.includes(n);
}

console.log(contains(arr1, 5));
