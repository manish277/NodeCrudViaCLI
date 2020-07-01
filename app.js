const yargs = require("yargs");
const commands = require("./command");
let command = yargs.argv._[0];

let item = yargs.argv.item;
let price = yargs.argv.price;

if (command === "add") {
  if (item && price) {
    commands.add(item, price);
  }
} else if (command === "remove") {
  if (item) {
    commands.remove(item);
  }
} else if (command === "print") {
  commands.print();
} else if (command === "priceOf") {
  if (item) {
    commands.priceOf(item);
  }
} else {
  console.log("sorry, May be something wrong with input");
}
