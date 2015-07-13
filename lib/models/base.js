var assert = require('assert');

function BaseModel (opts) {
  // use opts to give things starting values
  if (opts) {
    Object.keys(this)
    .forEach(function (name) {
      this['_' + name] = opts[name];
    });
  }
}

BaseModel.prototype.jsonify = function () {
  var self = this;
  var json = {};
  Object.keys(this)
  .filter(function (name) {
    return name[0] === '_';
  })
  .forEach(function (name) {
    json[name.slice(1)] = self[name];
  });

  json.type = this.type;
  json._id = json.name;
  return json;
};

module.exports = BaseModel;
