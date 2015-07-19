var Skill = require('./skill');
var util = require('util');
var utils = require('../utils');

function Technique () {
  Skill.apply(this, arguments);
}

util.inherits(Technique, Skill);

Technique.type = 'technique';

var property = utils.define_getter_setter.bind(null, Technique.prototype);

property('prerequisites', []);

module.exports = Technique;
