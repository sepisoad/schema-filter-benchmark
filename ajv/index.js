// AJV

const ajv = require('ajv');

const fullSchema = require('./full');
const mediumSchema = require('./medium');
const lightSchema = require('./light');

function ajv_benchmarking(data) {
  console.log("= AVJ Tests: =====");
  full(data);
  console.log();
  medium(data);
  console.log();
  light(data);
  console.log();
}

function full(_data) {
  const compiler = new ajv({removeAdditional: true});

  const arrayValidator = compiler.compile(fullSchema.array);
  const arrayData = JSON.parse(JSON.stringify(_data));
  console.time("AJV[FULL][BULK]");
  arrayValidator(arrayData);
  console.timeEnd("AJV[FULL][BULK]");


  const rowValidator = compiler.compile(fullSchema.row);
  const rowData = JSON.parse(JSON.stringify(_data));
  console.time("AJV[FULL][ROWS]");
  const len = rowData.length;
  for(let idx = 0; idx < len; idx++){
    rowValidator(rowData[idx]);
  }
  console.timeEnd("AJV[FULL][ROWS]");
}

function medium(_data) {
  const compiler = new ajv({removeAdditional: true});

  const arrayValidator = compiler.compile(mediumSchema.array);
  const arrayData = JSON.parse(JSON.stringify(_data));
  console.time("AJV[MEDIUM][BULK]");
  arrayValidator(arrayData);
  console.timeEnd("AJV[MEDIUM][BULK]");


  const rowValidator = compiler.compile(mediumSchema.row);
  const rowData = JSON.parse(JSON.stringify(_data));
  console.time("AJV[MEDIUM][ROWS]");
  const len = rowData.length;
  for(let idx = 0; idx < len; idx++){
    rowValidator(rowData[idx]);
  }
  console.timeEnd("AJV[MEDIUM][ROWS]");
}

function light(_data) {
  const compiler = new ajv({removeAdditional: true});

  const arrayValidator = compiler.compile(lightSchema.array);
  const arrayData = JSON.parse(JSON.stringify(_data));
  console.time("AJV[LIGHT][BULK]");
  arrayValidator(arrayData);
  console.timeEnd("AJV[LIGHT][BULK]");


  const rowValidator = compiler.compile(lightSchema.row);
  const rowData = JSON.parse(JSON.stringify(_data));
  console.time("AJV[LIGHT][ROWS]");
  const len = rowData.length;
  for(let idx = 0; idx < len; idx++){
    rowValidator(rowData[idx]);
  }
  console.timeEnd("AJV[LIGHT][ROWS]");
}

module.exports = ajv_benchmarking;