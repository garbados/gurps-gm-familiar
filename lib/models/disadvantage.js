var util = require('util');
var Advantage = require('./advantage');

function Disadvantage () {
  Advantage.apply(this, arguments);
}

util.inherits(Disadvantage, Advantage);

Disadvantage.type = 'disadvantage';

module.exports = Disadvantage;
