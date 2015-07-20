var BaseModel = require('./base');
var util = require('util');
var utils = require('../utils');

function Enhancement () {
  BaseModel.apply(this, arguments);
}

util.inherits(Enhancement, BaseModel);

Enhancement.type = 'enhancement';

var property = utils.define_getter_setter.bind(null, Enhancement.prototype);

property('name');
property('description', '');
property('cost', 0);
property('modifier', 0);

module.exports = Enhancement;
