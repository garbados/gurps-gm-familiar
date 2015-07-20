var BaseController = require('./base');
var Limitation = require('../models/limitation');
var util = require('util');

function LimitationsController () {
  this.model = LimitationsController.model;
  BaseController.apply(this, arguments);
}

util.inherits(LimitationsController, BaseController);

LimitationsController.model = Limitation;

module.exports = LimitationsController;
