//Task1
/**
 * Task description: Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
 * Make 3 solution variants:
 * 1. Using a for loop.
 * 2. Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
 * 3. Using the arithmetic progression formula.
 * Expected Result: 5050
 * @param {number} n - The number up to which the sum should be calculated.
 * @returns {number} - The sum of numbers from 1 to n.
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

//Task2
/**
 * Task description: Calculate factorial
 * The factorial of a natural number is a number multiplied by "number minus one",
 * then by "number minus two", and so on till 1. The factorial of n is denoted as n!
 * Write a function factorial(n) that calculates n! using recursive calls.
 * Expected Result: 120
 * @param {number} n - The number for which to calculate the factorial
 * @returns {number} - The factorial of n
 */
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

alert(factorial(5));

//Task3
/**
 * Task description: Write a function fib(n) that returns the n-th Fibonacci number.
 * Expected Result: 2
 *                  13
 *                  5527939700884757
 * @param {number} n - The position of the Fibonacci number to calculate
 * @returns {number} - The Fibonacci number at position n
 */

function fib(n) {
  let prev = 1;
  let prevPrev = 1;
  let result = 0;

  for (let i = 3; i <= n; i++) {
    result = prev + prevPrev;
    prevPrev = prev;
    prev = result;
  }

  return result;
}

alert(fib(3));
alert(fib(7));
alert(fib(77));

//Task4
/**
 * Task description: Write a function printList(list) that outputs list items one-by-one.
 * Expected Result: 2
 *                  13
 *                  5527939700884757
 * @param {Object} list - The linked list to print
 */

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

printList(list);
