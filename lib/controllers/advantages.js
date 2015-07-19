var BaseController = require('./base');
var Advantage = require('../models/advantage');
var util = require('util');

function AdvantagesController () {
  this.model = AdvantagesController.model;
  BaseController.apply(this, arguments);
}

util.inherits(AdvantagesController, BaseController);

AdvantagesController.model = Advantage;

module.exports = AdvantagesController;
