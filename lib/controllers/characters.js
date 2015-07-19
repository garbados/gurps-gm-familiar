var BaseController = require('./base');
var Character = require('../models/character');
var util = require('util');

function CharactersController () {
  this.model = CharactersController.model;
  BaseController.apply(this, arguments);
}

util.inherits(CharactersController, BaseController);

CharactersController.model = Character;

module.exports = CharactersController;
