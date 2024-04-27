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

//Task8
//the 1st way
function formatDate(date) {
  let diff = new Date() - date;

  switch (true) {
    case diff < 1000:
      return "прямо сейчас";
    case diff < 60000:
      return Math.floor(diff / 1000) + " сек. назад";
    case diff < 3600000:
      return Math.floor(diff / 60000) + " мин. назад";
    default:
      let d = date;
      d = [
        "0" + d.getDate(),
        "0" + (d.getMonth() + 1),
        "" + d.getFullYear(),
        "0" + d.getHours(),
        "0" + d.getMinutes(),
      ].map((component) => component.slice(-2)); // to two-digit format
      return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
  }
}

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

//the 2nd way
function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (diffSec < 1) {
    return "right now";
  } else if (diffMin < 1) {
    return `${diffSec} sec. ago`;
  } else if (diffHour < 1) {
    return `${diffMin} min. ago`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}
