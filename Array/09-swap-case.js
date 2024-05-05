/**
 * Task description: Write a JavaScript program that accepts a string as input and swaps the case of each character.
 * Sample input: 'The Quick Brown Fox'
 * Expected Result: 'tHE qUICK bROWN fOX'
 */
let userInput = prompt("Please write a text: ");

let result = "";

for (let i = 0; i < userInput.length; i++) {
  if (userInput[i] == userInput[i].toUpperCase()) {
    result += userInput[i].toLowerCase();
  } else {
    result += userInput[i].toUpperCase();
  }
}

console.log(result);
