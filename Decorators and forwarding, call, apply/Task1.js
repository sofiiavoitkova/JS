/**
 * Task description: Create a decorator spy(func) that should return a wrapper that saves
 * all calls to function in its calls property.
 * Expected results: 3, 9, call:1,2, call:4,5
 * @param {Function} func - The function to be wrapped
 * @returns {Function} - A wrapper function that saves all calls to the function
 */

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}

function work(a, b) {
  alert(a + b);
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  alert("call:" + args.join());
}
