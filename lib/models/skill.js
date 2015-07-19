var BaseModel = require('./base');
var util = require('util');
var utils = require('../utils');

function Skill () {
  BaseModel.apply(this, arguments);
}

Skill.type = 'skill';

util.inherits(Skill, BaseModel);

var property = utils.define_getter_setter.bind(null, Skill.prototype);

property('name');
property('attribute');
property('difficulty', 'average');
property('defaults', {});
property('description', '');

module.exports = Skill;
