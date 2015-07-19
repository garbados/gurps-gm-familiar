var Spell = require('../models/spell')
var TechniquesController = require('./techniques');
var util = require('util');

function SpellsController () {
  this.model = SpellsController.model;
  TechniquesController.apply(this, arguments);
}

SpellsController.model = Spell;

util.inherits(SpellsController, TechniquesController);

module.exports = SpellsController;
