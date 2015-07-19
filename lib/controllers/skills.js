var BaseController = require('./base');
var Skill = require('../models/skill');
var util = require('util');

function SkillsController () {
  this.model = SkillsController.model;
  BaseController.apply(this, arguments);
}

SkillsController.model = Skill;

util.inherits(SkillsController, BaseController);

module.exports = SkillsController;
