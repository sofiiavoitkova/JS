/**
 * Task description: Write a JavaScript function to check whether an `input` is an array or not.
 * Expected Result: false
                    true
 * @param {*} arr - The variable to check.
 * @returns {boolean} Returns true for an array, otherwise false. 
 */
function is_array(arr) {
  return Array.is_array(arr);
}

console.log(is_array("js test"));
console.log(is_array([1, 2, 4, 0]));
