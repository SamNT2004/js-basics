// npm init -> create a nodejs project
// npm i -> install libs
// npm i cowsay

var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);

// or cowsay.think()