/**
 * Task description: Write a JavaScript function to filter false, null, 0 and blank values from an array.
 * Expected results: [58, "abcd", true]
 * @param {Array} arr - The input array
 * @returns {Array} - The filtered array
 */
function filterArrayValues(arr) {
  return arr.filter(
    (element) =>
      element !== false && element !== null && element !== 0 && element !== ""
  );
}

console.log(filterArrayValues([58, "", "abcd", true, null, false, 0]));
