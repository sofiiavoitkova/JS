//Task1
// Original object
let user = {
  name: "Василий Иванович",
  age: 35,
};

let user1 = JSON.parse(JSON.stringify(user));

user.age = 40;

console.log(user1);

//Task2
let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(
  JSON.stringify(meetup, function replacer(key, value) {
    if (key !== "" && value === meetup) {
      return undefined;
    } else {
      return value;
    }
  })
);
