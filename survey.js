const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? ", (name) => {
  rl.question("What's your favourite activity? ", (activity) => {
    rl.question("What music do you listen to? ", (music) => {
      rl.question("What's your favourite meal? ", (meal) => {
        rl.question("What's your favourite food? ", (food) => {
          rl.question("What sport do you like? ", (sport) => {
            rl.question("What's your superpower? ", (superpower) => {
              console.log(
                `${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`
              );
              rl.close();
            });
          });
        });
      });
    });
  });
});
