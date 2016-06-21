var DataStore = require('./DataStore.js');

function Model(schema) {

  // function getNextId() {
  //   return nextId;
  // }

  this.schema = schema;
  this.id = null;

  for (var key in this.schema) {
    this[key] = null;
  }

  if(DataStore.store[this.constructor.name] === undefined) {
    DataStore.store[this.constructor.name] = [];
  }

}

Model.getNextId = function() {
  return DataStore.store[this.name].length + 1;
};

Model.find = function(id) {
  for(var i = 0; i < DataStore.store[this.name].length; i++) {
    if(DataStore.store[this.name][i].id === id) {
      return DataStore.store[this.name][i];
    }
  }
  return null;
};

// Model.getNextId = function() {};

Model.prototype.save = function() {
  if(this.id === null) {
    this.id = this.constructor.getNextId();
    DataStore.store[this.constructor.name].push(this);
  }
};

Model.prototype.destroy = function() {
  if(this.id !== null) {
    DataStore.store[this.constructor.name].shift();
  }
};

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

Model.extend = function(klass) {
  extend(klass, Model);
  extend(klass.prototype, Model.prototype);
};

module.exports = Model;