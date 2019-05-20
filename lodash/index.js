// LODASH  

const _ = require('lodash');

function main(data) {
  console.log("= Lodash Tests: =====");
  full(data);
  console.log();
  medium(data);
  console.log();
  light(data);
  console.log();
}

function full(_data) {
  const data = JSON.parse(JSON.stringify(_data));
  var schema = {
    seq: null,
    name: null,
    age: null,
    street: null,
    city: null,
    state: null,
    zip: null,
    dollar: null,
    pics: null,
    date: null,
  };
  console.time("LODASH[FULL]");
  const res = _.map(data, function(item) {
    return _.pick(item, _.keys(schema));
  });
  console.timeEnd("LODASH[FULL]");
}

function medium(_data) {
  const data = JSON.parse(JSON.stringify(_data));
  var schema = {
    name: null,
    age: null,
    city: null,
    state: null,
    dollar: null,
    date: null,
  };
  console.time("LODASH[MEDIUM]");
  const res = _.map(data, function(item) {
    return _.pick(item, _.keys(schema));
  });
  console.timeEnd("LODASH[MEDIUM]");
}

function light(_data) {
  const data = JSON.parse(JSON.stringify(_data));
  var schema = {
    age: null,
    city: null,
  };
  console.time("LODASH[LIGHT]");
  const res = _.map(data, function(item) {
    return _.pick(item, _.keys(schema));
  });
  console.timeEnd("LODASH[LIGHT]");
}

module.exports = main;