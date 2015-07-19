var BaseController = require('./base');
var Advantage = require('../models/advantage');
var util = require('util');

function AdvantagesController () {
  this.model = AdvantagesController.model;
  BaseController.apply(this, arguments);
}

AdvantagesController.model = Advantage;

util.inherits(AdvantagesController, BaseController);

module.exports = AdvantagesController;
