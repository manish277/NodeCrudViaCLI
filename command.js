const fs = require("fs");

const readFile = (filename) => {
  try {
    return JSON.parse(fs.readFileSync(filename));
  } catch (error) {
    return [];
  }
};

const add = (item, price) => {
  let groceryList = readFile("groceryList.json");
  let index = groceryList.findIndex((x) => x.item === item);
  if (index === -1) {
    groceryList.push({ item, price });
  } else {
    groceryList[index].price += price;
  }

  fs.writeFileSync("groceryList.json", JSON.stringify(groceryList));
};

const remove = (item) => {
  let groceryList = readFile("groceryList.json");

  const filteredList = groceryList.filter((x) => x.item !== item);
  console.log(filteredList);
  fs.writeFileSync("groceryList.json", JSON.stringify(filteredList));
};

const print = () => {
  let groceryList = readFile("groceryList.json");
  console.log(groceryList);
};

const priceOf = (item) => {
  let groceryList = readFile("groceryList.json");

  let index = groceryList.findIndex((x) => x.item === item);
  if (index !== -1) {
    console.log(`price of ${item} is ${groceryList[index].price}`);
  }
};
module.exports = { add, remove, print, priceOf };
