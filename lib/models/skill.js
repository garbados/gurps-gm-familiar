var BaseModel = require('./base');
var util = require('util');
var utils = require('../utils');

function Skill () {
  BaseModel.apply(this, arguments);
}

util.inherits(Skill, BaseModel);

Skill.type = 'skill';

var property = utils.define_getter_setter.bind(null, Skill.prototype);

property('name');
property('attribute');
property('difficulty', 'average');
property('prerequisites', {});
property('specialties', {});
property('defaults', {});
property('description', '');

module.exports = Skill;
