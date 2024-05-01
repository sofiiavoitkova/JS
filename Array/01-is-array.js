/**
 * Task description: Write a JavaScript function to check whether an `input` is an array or not.
 * Expected Result: false
                    true
 * @param {*} arr - The variable to check.
 * @returns {boolean} Returns true for an array, otherwise false. 
 */
function isArray(arr) {
  return Array.isArray(arr);
}

console.log(isArray("js test"));
console.log(isArray([1, 2, 4, 0]));
