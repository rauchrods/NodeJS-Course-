const fs = require("fs");

function person(name, callback) {
  console.log(`hello ${name}`);
  callback();
}

function address() {
  console.log("address");
}

person("John", address);

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
