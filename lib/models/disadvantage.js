var util = require('util');
var Advantage = require('./advantage');

function Disadvantage () {
  Advantage.apply(this, arguments);
}

Disadvantage.type = 'disadvantage';

util.inherits(Disadvantage, Advantage);

module.exports = Disadvantage;
