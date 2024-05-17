/**
 * Task description: Here we make two counters: counter and counter2 using the same makeCounter function.
 * Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?
 * Answer: Each has its own independent outer Lexical Environment, with its own count.
 *         0
 *         1
 */
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // ?
console.log(counter2()); // ?
