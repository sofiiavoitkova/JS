/**
 * Task description: Write a JavaScript program to find the leap years in a given range of years.
 * Expected Result: [2000, 2004, 2008, 2012, 2016, 2020, 2024]
 * @param {Array} arr - The input array
 * @returns {Array} - The array with duplicate items removed
 */
function isLeapYear(start, end) {
  let leapYear = [];

  for (let year = start; year <= end; year++) {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    ) {
      leapYear.push(year);
    }
  }

  return leapYear;
}

console.log(isLeapYear(2000, 2024));
