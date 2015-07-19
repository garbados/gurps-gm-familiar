var BaseModel = require('./base');
var util = require('util');
var utils = require('../utils');

function Advantage () {
  BaseModel.apply(this, arguments);
}

Advantage.type = 'advantage';

util.inherits(Advantage, BaseModel);

var property = utils.define_getter_setter.bind(null, Advantage.prototype);

property('name');
property('description', '');
property('cost', 0);
property('mental', false);
property('physical', false);
property('social', false);
property('exotic', false);
property('supernatural', false);
property('mundane', true);

// TODO how the fuck are these supposed to work
property('limitations', []);

Object.defineProperty(Advantage.prototype, 'types', {
  get: function () {
    var types = {
      'mental': this.mental,
      'physical': this.physical,
      'social': this.social,
      'exotic': this.exotic,
      'supernatural': this.supernatural
    };

    return Object.keys(types).filter(function (type) {
      return types[type];
    });
  }
});

module.exports = Advantage;
