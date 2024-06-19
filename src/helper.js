const { readFileSync, writeFileSync } = require("node:fs");
// const data = require('../data/inventory.json')


/// THIS FUNCTION YOU UPDATE DIRECTLY 
function readJSONFile(path, fileName) {
  const collection = readFileSync(`${path}/${fileName}`, "utf8");
  return collection ? JSON.parse(collection): [];
}

// console.log(readJSONFile("./data", "inventory.json"));
// console.log(readJSONFile("./data", "data.json"));



////THIS FUNCTION YOU CAN NOT UPDATE DIRECTLY 
/// RETURNS UNDEFINED WHEN COMPLETIION IS SUCCESFUL
////The writeJSONFile function is used solely for writing data to a file
function writeJSONFile(path, fileName, data) {
  data = JSON.stringify(data);

  return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
}

// console.log(writeJSONFile("./data", "inventory.json", data))

module.exports = {
  readJSONFile,
  writeJSONFile,
};