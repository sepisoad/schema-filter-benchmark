// JSON_MASK 

const mask = require('json-mask');

function main(data) {
  console.log("= JsonMask Tests: =====");
  full(data);
  console.log();
  medium(data);
  console.log();
  light(data);
  console.log();
}

function full(_data) {
  const arrayData = JSON.parse(JSON.stringify(_data));
  const arraySchema = "(seq,name,age,street,city,state,zip,dollar,pics,date)"
  console.time("JSON_MASK[FULL][BULK]");
  mask(arrayData, arraySchema);
  console.timeEnd("JSON_MASK[FULL][BULK]");

  const rowData = JSON.parse(JSON.stringify(_data));
  const rowSchema = "seq,name,age,street,city,state,zip,dollar,pics,date"
  console.time("JSON_MASK[FULL][ROWS]");
  const len = rowData.length;
  for(let idx = 0; idx < len; idx++){
    mask(rowData[idx], rowSchema);
  }
  console.timeEnd("JSON_MASK[FULL][ROWS]");
}

function medium(_data) {
  const arrayData = JSON.parse(JSON.stringify(_data));
  const arraySchema = "(name,age,city,state,dollar,date)"
  console.time("JSON_MASK[MEDIUM][BULK]");
  mask(arrayData, arraySchema);
  console.timeEnd("JSON_MASK[MEDIUM][BULK]");

  const rowData = JSON.parse(JSON.stringify(_data));
  const rowSchema = "name,age,city,state,dollar,date"
  console.time("JSON_MASK[MEDIUM][ROWS]");
  const len = rowData.length;
  for(let idx = 0; idx < len; idx++){
    mask(rowData[idx], rowSchema);
  }
  console.timeEnd("JSON_MASK[MEDIUM][ROWS]");
}

function light(_data) {
  const arrayData = JSON.parse(JSON.stringify(_data));
  const arraySchema = "(age,city)"
  console.time("JSON_MASK[LIGHT][BULK]");
  mask(arrayData, arraySchema);
  console.timeEnd("JSON_MASK[LIGHT][BULK]");

  const rowData = JSON.parse(JSON.stringify(_data));
  const rowSchema = "age,city"
  console.time("JSON_MASK[LIGHT][ROWS]");
  const len = rowData.length;
  for(let idx = 0; idx < len; idx++){
    mask(rowData[idx], rowSchema);
  }
  console.timeEnd("JSON_MASK[LIGHT][ROWS]");
}

module.exports = main;