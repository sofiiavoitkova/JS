/**
 * Task description: Write a JavaScript function to find the longest common starting substring in a set of strings.
 * Expected Result:  "goo"
 * @param {Array} arr - The input array of strings
 * @returns {string} - The longest common starting substring
 */
function longest_common_starting_substring(arr) {
  if (arr.length === 0) return "";

  let common = "";

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j][i] !== arr[0][i]) {
        return common;
      }
    }
    common += arr[0][i];
  }
  return common;
}

console.log(longest_common_starting_substring(["gooo", "google", "goooogle"]));
