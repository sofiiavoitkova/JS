/**
 * Task description: Write a JavaScript program to shuffle an array.
 * @param {Array} arr - The input array to be shuffled
 * @returns {Array} - The shuffled array (using Fisher–Yates shuffle)
 */
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

console.log(shuffle(array));
