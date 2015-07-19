var Technique = require('../models/technique')
var SkillsController = require('./skills');
var util = require('util');

function TechniquesController () {
  this.model = TechniquesController.model;
  SkillsController.apply(this, arguments);
}

TechniquesController.model = Technique;

util.inherits(TechniquesController, SkillsController);

module.exports = TechniquesController;
