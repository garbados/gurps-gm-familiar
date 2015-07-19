var BaseController = require('./base');
var Attribute = require('../models/attribute');
var util = require('util');

function AttributesController () {
  this.model = AttributesController.model;
  BaseController.apply(this, arguments);
}

util.inherits(AttributesController, BaseController);

AttributesController.model = Attribute;

module.exports = AttributesController;
