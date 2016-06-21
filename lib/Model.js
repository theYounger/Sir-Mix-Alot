var DataStore = require('./DataStore.js');

function Model(schema) {
  this.schema = schema;
  this.id = null;

  for (var key in this.schema) {
    this[key] = null;
  }

  if(DataStore.store[this.constructor.name] === undefined) {
    DataStore.store[this.constructor.name] = [];
  }

  this.constructor.getNextId = function() {
    return DataStore.store[this.constructor.name].length + 1;

  };
}

  Model.constructor.getNextId = function() {
    return DataStore.store[this.constructor.name].length + 1;

  };


// Model.getNextId = function() {};

Model.prototype.save = function() {

};

Model.prototype.destroy = function() {

};

var modeltest = new Model({testing1: 1, testing2: 2, testing3: 3});

console.log(modeltest);
console.log(DataStore);

module.exports = Model;