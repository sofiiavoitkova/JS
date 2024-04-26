//Task1
let d = new Date(2012, 1, 20, 3, 12);
console.log(d);

//Task3
function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
}

let date = new Date(2012, 0, 3);
alert(getLocalDay(date));

//Task4
function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1
console.log(getDateAgo(date, 2)); // 31
console.log(getDateAgo(date, 365)); // 2
