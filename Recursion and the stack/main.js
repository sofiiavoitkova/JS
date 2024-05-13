//Task1
/**
 * Task description: Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
 * Make 3 solution variants:
 * 1. Using a for loop.
 * 2. Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
 * 3. Using the arithmetic progression formula.
 * Expected Result: 5050
 * @param {Array} arr - The unsorted array
 * @param {number} n - The position of the nth largest element
 * @returns {number} - The nth largest element
 */
//The 1st solution
function sumTo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

alert(sumTo(100));

//The 2nd solution
function sumTo(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}

alert(sumTo(100));

//The 3rd solution
function sumTo(n) {
  return (n * (n + 1)) / 2;
}

alert(sumTo(100));
