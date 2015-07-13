var assert = require('assert');

function BaseModel (opts) {
  // use opts to give things starting values
  if (opts) {
    for (var key in opts) {
      this['_' + key] = opts[key];
    }
  }
}

Object.defineProperty(BaseModel.prototype, 'json', {
  get: function () {
    var self = this;
    var json = {};
    Object.keys(this)
    .filter(function (name) {
      return name[0] === '_';
    })
    .forEach(function (name) {
      json[name.slice(1)] = self[name];
    });

    return json;
  } 
});

module.exports = BaseModel;
