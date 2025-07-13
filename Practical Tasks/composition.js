//Task: Write a function withFlying that adds a fly method to the object.
//Create a Superman object that is composed of withFlying and has a fight method.

function withFlying(obj) {
  obj.fly = function () {
    console.log("Fly");
  };
}

const Superman = {
  fight() {
    console.log("Fight");
  },
};

withFlying(Superman);

Superman.fight();
Superman.fly();
