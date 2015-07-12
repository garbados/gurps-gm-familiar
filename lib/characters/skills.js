var utils = require('./utils');
/*
List of skills included in GURPS 4e Basic Set: Characters
and utilities for working with them, ex: performing checks.
*/
function Skills (opts) {

}

Skills.prototype.name = utils._get_or_set('name');
Skills.prototype.attribute = utils._get_or_set('attribute');
Skills.prototype.difficulty = utils._get_or_set('difficulty', 'average');
Skills.prototype.defaults = utils._group_get_or_set('defaults');

module.exports = Skills;
