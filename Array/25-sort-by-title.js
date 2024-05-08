/**
 * Task description: Write a JavaScript function to sort the following array of objects by title value.
 * Expected Result:  [[object Object] {
                    author: "Suzanne Collins",
                    libraryID: 3245,
                    title:"Mockingjay:The Final Book of The Hunger Games"
                    }, [object Object] {
                    author: "Bill Gates",
                    libraryID: 1254,
                    title: "The Road Ahead"
                    }, [object Object] {
                    author: "Steve Jobs",
                    libraryID: 4264,
                    title: "Walter Isaacson"
                    }]
 * @param {Array} array - The input array
 * @returns {Array} - An array without falsy values
 */
var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

library.sort(function (x, y) {
  if (x.title < y.title) {
    return -1;
  }

  if (x.title > y.title) {
    return 1;
  }

  return 0;
});

console.log(library);
