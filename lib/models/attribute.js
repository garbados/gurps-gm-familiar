var BaseModel = require('./base');
var util = require('util');
var utils = require('../utils');

function Attribute () {
  BaseModel.apply(this, arguments);
}

util.inherits(Attribute, BaseModel);

Attribute.type = 'attribute';

var property = utils.define_getter_setter.bind(null, Attribute.prototype);

property('name');
property('description', '');
property('cost', 0);
property('enhancements', {});
property('limitations', {});

module.exports = Attribute;
