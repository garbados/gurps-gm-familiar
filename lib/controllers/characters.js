var BaseController = require('./base');
var Character = require('../models/character');
var util = require('util');

function CharactersController () {
  this.model = Character;
  BaseController.apply(this, arguments);
}

util.inherits(CharactersController, BaseController);

module.exports = CharactersController;
