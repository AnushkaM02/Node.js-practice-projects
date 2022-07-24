const fs = require("fs");

// const book = {
//   title: "Legend",
//   author: "Marie Lu",
// };

// const bookJSON = JSON.stringify(book);

// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON);
// console.log(parseData);
// console.log(parseData.author);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// console.log(dataBuffer.toString());

// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
console.log(user);

user.name = "Anushka";
user.age = 20;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
