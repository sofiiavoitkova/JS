//Task1
function unique(arr) {
  function unique(arr) {
    return Array.from(new Set(arr));
  }
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(values));
