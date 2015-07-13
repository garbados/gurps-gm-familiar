var assert = require('assert');
var db = require('../db');

function BaseController () {
  assert.notEqual(this.model, undefined);
  this.db = db(this.model.type);
}

BaseController.prototype.save = function (model) {
  assert(model.name);
  var json = model.json;
  return this.db.put(json, json.name);
};

BaseController.prototype.load = function (name) {
  var self = this;
  return this.db.get(name)
  .then(function (doc) {
    return new self.model(doc);
  });
};

// TODO implement queries through controllers
BaseController.prototype.find = function (query) {
  // return this.db.find(query);
  throw new Error("Not Implemented");
};

module.exports = BaseController;
