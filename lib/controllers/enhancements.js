var BaseController = require('./base');
var Enhancement = require('../models/enhancement');
var util = require('util');

function EnhancementsController () {
  this.model = EnhancementsController.model;
  BaseController.apply(this, arguments);
}

util.inherits(EnhancementsController, BaseController);

EnhancementsController.model = Enhancement;

module.exports = EnhancementsController;
