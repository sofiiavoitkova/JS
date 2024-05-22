/**
 * Task description: Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
 * Sample array: arr = ["banana", "Banana", "orange", "Orange"];
 * Expected Result: ['banana', 'orange']
 * @param {Array} arr - The input array
 * @returns {Array} - The array with duplicate items removed
 */
let arr = ["banana", "Banana", "orange", "Orange"];

let lowerCase = [];

function removeDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    lowerCase.push(arr[i].toLowerCase());
  }

  return Array.from(new Set(lowerCase));
}

console.log(removeDuplicate(arr));
