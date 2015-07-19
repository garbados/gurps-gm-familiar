var BaseController = require('./base');
var Disadvantage = require('../models/disadvantage');
var util = require('util');

function DisadvantagesController () {
  this.model = DisadvantagesController.model;
  BaseController.apply(this, arguments);
}

util.inherits(DisadvantagesController, BaseController);

DisadvantagesController.model = Disadvantage;

module.exports = DisadvantagesController;
