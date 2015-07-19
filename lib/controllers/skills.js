var BaseController = require('./base');
var Skill = require('../models/skill');
var util = require('util');

function SkillsController () {
  this.model = SkillsController.model;
  BaseController.apply(this, arguments);
}

util.inherits(SkillsController, BaseController);

SkillsController.model = Skill;

module.exports = SkillsController;
