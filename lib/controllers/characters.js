var BaseController = require('./base');
var Character = require('../models/character');
var util = require('util');

function CharactersController () {
  this.model = CharactersController.model;
  BaseController.apply(this, arguments);
}

CharactersController.model = Character;

util.inherits(CharactersController, BaseController);

module.exports = CharactersController;
