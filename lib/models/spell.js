var Technique = require('./skill');
var util = require('util');
var utils = require('../utils');

function Spell () {
  Technique.apply(this, arguments);
}

util.inherits(Spell, Technique);

Spell.type = 'spell';

var property = utils.define_getter_setter.bind(null, Spell.prototype);

property('duration', undefined);
property('cost', 1);
property('cost_to_maintain', undefined);
property('time_to_cast', 1);

module.exports = Spell;
