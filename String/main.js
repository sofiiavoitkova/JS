//Task1
function ucFirst(str) {
  if (str.length > 0) {
    return str[0].toUpperCase() + str.slice(1);
  } else {
    return str;
  }
}

console.log(ucFirst("вася"));

//Task2
function checkSpam(str) {
  if (typeof str != "string") throw Error("Not a string");
  return str.toLowerCase().includes("via") || str.toLowerCase().includes("xxx");
}

console.log(checkSpam("buy ViA now"));
console.log(checkSpam("eee xxxxx"));
console.log(checkSpam("innocent rabbit"));
console.log(checkSpam(33));
