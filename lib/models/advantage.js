var BaseModel = require('./base');
var util = require('util');
var utils = require('../utils');

function Advantage () {
  this._type = 'advantage';
  BaseModel.apply(this, arguments);
}

util.inherits(Advantage, BaseModel);

Advantage.prototype.name = utils._get_or_set('name');
Advantage.prototype.description = utils._get_or_set('description', '');
Advantage1.prototype.affects = utils._group_get_or_set('affects');

module.exports = Advantage;
