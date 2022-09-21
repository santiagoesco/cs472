const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

var readQuestion1 = function () {
  readline.question("What is your name?", (name) => {
    console.log(`Welcome ${name}`);
    readQuestion2();
  });
};

var readQuestion2 = function () {
  readline.question("Age?", (age) => {
    if (age < 16) {
      console.log("You're are note allowed to drive in Iowa");
    } else {
      console.log("You're allowed to get a drivers license in Iowa");
    }

    return readline.close();
  });
};

readQuestion1();
