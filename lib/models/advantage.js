var BaseModel = require('./base');
var util = require('util');
var utils = require('../utils');

function Advantage () {
  BaseModel.apply(this, arguments);
}

util.inherits(Advantage, BaseModel);

Advantage.type = 'advantage';

var property = utils.define_getter_setter.bind(null, Advantage.prototype);

property('name');
property('description', '');
property('cost', 0);
property('min', 0);
property('max', 1);
property('mental', false);
property('physical', false);
property('social', false);
property('exotic', false);
property('supernatural', false);
property('limitations', {});
property('enhancements', {});

Object.defineProperty(Advantage.prototype, 'mundane', {
  get: function () {
    return !(this.exotic || this.supernatural);
  }
});

Object.defineProperty(Advantage.prototype, 'types', {
  get: function () {
    var types = {
      'mental': this.mental,
      'physical': this.physical,
      'social': this.social,
      'exotic': this.exotic,
      'supernatural': this.supernatural,
      'mundane': this.mundane
    };

    return Object.keys(types).filter(function (type) {
      return types[type];
    });
  }
});

module.exports = Advantage;
