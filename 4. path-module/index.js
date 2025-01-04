const path = require("path");

console.log('Directory Name: ', path.dirname(__filename));

console.log('File Name: ', path.basename(__filename));

console.log('File Extension: ', path.extname(__filename));

console.log(path.join(__dirname, "test", 'folder', "hello.html"));

console.log(path.resolve(__dirname, "test", 'folder', "hello.html"));