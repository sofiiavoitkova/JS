//Task1
function ucFirst(str) {
  if (str.length > 0) {
    return str[0].toUpperCase() + str.slice(1);
  } else {
    return str;
  }
}

console.log(ucFirst("вася"));
