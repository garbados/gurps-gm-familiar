var BaseModel = require('./base');
var util = require('util');
var utils = require('../utils');

function Limitation () {
  BaseModel.apply(this, arguments);
}

util.inherits(Limitation, BaseModel);

Limitation.type = 'limitation';

var property = utils.define_getter_setter.bind(null, Limitation.prototype);

property('name');
property('description', '');
property('cost', 0);
property('modifier', 0);

module.exports = Limitation;
