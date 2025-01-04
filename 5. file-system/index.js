const fs = require("fs");

const path = require("path");

const dataFolder = path.join(__dirname, "data");

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log('Data folder created');
}

const dataFilePath = path.join(dataFolder, "example.js");

if(!fs.existsSync(dataFilePath)){
    fs.writeFileSync(dataFilePath, "");
    console.log('example file created');
}

const readContentFromFile = fs.readFileSync(dataFilePath, "utf-8");

console.log(readContentFromFile);

fs.appendFileSync(dataFilePath, "\nHello from appendFileSync");