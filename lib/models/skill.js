var BaseModel = require('./base');
var util = require('util');
var utils = require('../utils');

function Skill () {
  this._type = 'skill';
  BaseModel.apply(this, arguments);
}

util.inherits(Skill, BaseModel);

Skill.prototype.name = utils._get_or_set('name');
Skill.prototype.attribute = utils._get_or_set('attribute');
Skill.prototype.difficulty = utils._get_or_set('difficulty', 'average');
Skill.prototype.defaults = utils._group_get_or_set('defaults');
Skill.prototype.description = utils._get_or_set('description');

module.exports = Skill;
