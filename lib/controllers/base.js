var assert = require('assert');
var db = require('../db');

function BaseController () {
  assert.notEqual(this.model, undefined);
  this.db = db(this.model.type);
  this.make_index = this.db.createIndex({
    index: Object.keys(this.model)
  });
}

BaseController.prototype.save = function (model) {
  var json = model.jsonify();
  console.log(model, json);
  return this.db.put(json, json.name);
};

BaseController.prototype.load = function (name) {
  var self = this;
  return this.db.get(name)
  .then(function (doc) {
    return new self.model(doc);
  });
};

BaseController.prototype.find = function (query) {
  var self = this;
  return this.make_index.then(function () {
    return self.db.find(query);
  });
};

module.exports = BaseController;
