var util = require('util');
var Advantage = require('./advantage');

function Disadvantage () {
  this._type = 'disadvantage';
  Advantage.apply(this, arguments);
}

util.inherits(Disadvantage, Advantage);

module.exports = Disadvantage;
