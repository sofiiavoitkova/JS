//Task1
let d = new Date(2012, 1, 20, 3, 12);
console.log(d);

//Task2
function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
}

let date = new Date(2012, 0, 3);
alert(getLocalDay(date));
