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

//Task5
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert(getLastDayOfMonth(2012, 1)); // 29

//Task6
//the 1st way
function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // milliseconds
  return Math.round(diff / 1000); // seconds
}

console.leg(getSecondsToday());

//the 2nd way
function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

//Task7
//the 1st way
function getSecondsToTomorrow() {
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now;
  return Math.round(diff / 1000);
}

//the 2nd way
function getSecondsToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}
