/**
 * Task description: Write a JavaScript function to find an array containing a specific element.
 * Expected Result: [True]
 * @param {Array} arr - The input array
 * @param {number} n - The element to search for
 * @returns {boolean} - True if the element is found, otherwise false
 */
//the 1st way
function contains(arr, n) {
  let arr1 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return true;
    }
  }

  return false;
}

arr = [2, 5, 9, 6];

console.log(contains(arr, 5));

//the 2nd way
function contains(arr, n) {
  return arr.includes(n);
}

arr = [2, 5, 9, 6];

console.log(contains(arr, 5));
