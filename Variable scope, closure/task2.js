/**
 * Task description: Which value it will show? “Pete” or “John”?
 * Answer: Pete
 */
function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
  };
}

let name = "John";

let work = makeWorker();

work();
