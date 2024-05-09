/**
 * Task description: Write a JavaScript function to remove a specific element from an array
 * Expected Result:  [2, 9, 6]
 * @param {Array} arr - The input array
 * @param {number} n - The element to remove
 * @returns {Array} - An array without a specific element
 */
//the 1st way
function remove_array_element(arr, n) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== n) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
console.log(remove_array_element([2, 5, 9, 6], 5));

//the 2nd way
function remove_array_element(arr, n) {
  return arr.filter((element) => element !== n);
}
console.log(remove_array_element([2, 5, 9, 6], 5));
