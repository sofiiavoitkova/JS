/**
 * Task description: The result of debounce(f, ms) decorator is a wrapper that suspends calls to f until
 * there’s ms milliseconds of inactivity (no calls, “cooldown period”), then invokes f once with the latest arguments.
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @returns {Function} - A new debounced function
 */

//the 1st way
function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const context = this;

    const later = () => {
      timeout = null;
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debounced = debounce((message) => {
  console.log(message);
}, 1000);

debounced("a");
setTimeout(() => debounced("b"), 200);
setTimeout(() => debounced("c"), 500);

//the 2nd way
function debounce(func, ms) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

const debounced = debounce((message) => {
  console.log(message);
}, 1000);

debounced("a");
setTimeout(() => debounced("b"), 200);
setTimeout(() => debounced("c"), 500);
