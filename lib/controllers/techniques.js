var BaseController = require('./base');
var Technique = require('../models/technique');
var util = require('util');

function TechniquesController () {
  this.model = TechniquesController.model;
  BaseController.apply(this, arguments);
}

util.inherits(TechniquesController, BaseController);

TechniquesController.model = Technique;

module.exports = TechniquesController;
