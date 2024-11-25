const fs = require("fs");

let dogs = JSON.parse(fs.readFileSync("./data/v1.json"));

const rares_ = fs.readFileSync("./rare.txt");

const rares = rares_.toString().split("\n");

for (let i = 0; i < dogs.length; i++) {
  if (rares.includes(dogs[i].id)) {
    dogs[i].general.rare = true;
  } else {
    dogs[i].general.rare = false;
  }
}

fs.writeFileSync("./data/v1.json", JSON.stringify(dogs, null, 2));
