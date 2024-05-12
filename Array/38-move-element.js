/**
 * Task description: Write a JavaScript function to move an array element from one position to another.
 * Expected results: [20, 30, 10, 40, 50]
 *                   [10, 20, 30, 50, 40]
 * @param {Array} arr - The input array
 * @param {number} from - The index of the element to move
 * @param {number} to - The position to move the element to
 * @returns {Array} - The array with the element moved
 */
function move(arr, from, to) {
  let element = arr.splice(from, 1);

  arr.splice(to, 0, element);

  return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));
