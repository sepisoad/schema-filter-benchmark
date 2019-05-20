// benchmarking 

const fs = require('fs');
const AJV = require('./ajv');
const MASK = require('./mask');
const LODASH = require('./lodash');

const DATA_FILE = "data.json";

function main() {
  console.log("loading json file...");
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  AJV(data);
  MASK(data);
  LODASH(data);
}

main();