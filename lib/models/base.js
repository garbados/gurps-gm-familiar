var assert = require('assert');

function BaseModel (opts) {
  // require an object type
  assert.notEqual(this._type, undefined);
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
};

module.exports = BaseModel;
