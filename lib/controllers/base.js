var assert = require('assert');
var db = require('../db');

function BaseController () {
  assert.notEqual(this.model, undefined);
  this.db = db(this.model.type);
}

BaseController.prototype.save = function (model) {
  return this.save_json(model.json);
};

BaseController.prototype.save_json = function (json) {
  return this.db.put(json, json.name);
};

BaseController.prototype.get = function (name) {
  var self = this;
  return this.db.get(name)
  .then(function (doc) {
    return new self.model(doc);
  });
};

BaseController.prototype.fetch = function (options) {
  var self = this;
  return this.db.allDocs(options || {
    include_docs: true
  })
  .then(function (res) {
    return res.rows.map(function (row) {
      return new self.model(row.doc);
    });
  });
}

// TODO implement queries through controllers
BaseController.prototype.find = function (query) {
  // return this.db.find(query);
  throw new Error("Not Implemented");
};

module.exports = BaseController;
