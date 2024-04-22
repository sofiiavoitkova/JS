//Task1
//the 1st way
function camelize(str) {
  let words = str.split("-");
  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i] !== "") {
      result += words[i][0].toUpperCase() + words[i].slice(1);
    }
    return result;
  }

  console.log(camelize("background-color")); // 'backgroundColor'
  console.log(camelize("list-style-image")); // 'listStyleImage'
  console.log(camelize("-webkit-transition")); // 'WebkitTransition'
}

//the 2nd way
function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
