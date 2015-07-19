var BaseController = require('./base');
var Spell = require('../models/spell');
var util = require('util');

function SpellsController () {
  this.model = SpellsController.model;
  BaseController.apply(this, arguments);
}

util.inherits(SpellsController, BaseController);

SpellsController.model = Spell;

module.exports = SpellsController;
