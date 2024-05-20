/**
 * Task description: The following code creates an array of shooters.
 * Every function is meant to output its number. But something is wrong…
 * 
 * function makeArmy() {
 *  let shooters = [];
 * 
 *  let i = 0;
 *  while (i < 10) {
 *     let shooter = function() { // create a shooter function,
 *       alert( i ); // that should show its number
 *     };
 *     shooters.push(shooter); // and add it to the array
 *     i++;
 *   }

 *  // ...and return the array of shooters
 *   return shooters;
 * }
 * 
 * let army = makeArmy();
 * 
 * // all shooters show 10 instead of their numbers 0, 1, 2, 3...
 * army[0](); // 10 from the shooter number 0
 * army[1](); // 10 from the shooter number 1
 * army[2](); // 10 ...and so on.
 * Why do all of the shooters show the same value?

 * Fix the code so that they work as intended.
 * @returns {Array} - An array of shooter functions
 */

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[1]();
army[2]();
