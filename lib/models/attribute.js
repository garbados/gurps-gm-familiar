var BaseModel = require('./base');
var util = require('util');
var utils = require('../utils');

function Attribute () {
  BaseModel.apply(this, arguments);
}

Attribute.type = 'advantage';

util.inherits(Attribute, BaseModel);

var property = utils.define_getter_setter.bind(null, Attribute.prototype);

property('name');
property('description', '');
property('cost', 0);

module.exports = Attribute;
