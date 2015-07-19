var Disadvantage = require('../models/disadvantage')
var AdvantagesController = require('./advantages');
var util = require('util');

function DisadvantagesController () {
  this.model = DisadvantagesController.model;
  AdvantagesController.apply(this, arguments);
}

DisadvantagesController.model = Disadvantage;

util.inherits(DisadvantagesController, AdvantagesController);

module.exports = DisadvantagesController;
