var BaseController = require('./base');
var Attribute = require('../models/attribute');
var util = require('util');

function AttributesController () {
  this.model = AttributesController.model;
  BaseController.apply(this, arguments);
}

AttributesController.model = Attribute;

util.inherits(AttributesController, BaseController);

module.exports = AttributesController;
