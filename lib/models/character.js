var BaseModel = require('./base');
var util = require('util');
var utils = require('../utils');
var _get_or_set = utils._get_or_set;
var _group_get_or_set = utils._group_get_or_set;

function Character () {
  this.type = 'character';
  BaseModel.apply(this, arguments);
}

Character.prototype = {
  get strength () { return this._strength || 10; },
  set strength (value) { this._strength = value; },
  get dexterity () { return this._dexterity || 10; },
  set dexterity (value) { this._dexterity = value; },
};

util.inherits(Character, BaseModel);

Character.prototype.name = _get_or_set('name');
// ATTRIBUTES
// Character.prototype.strength = _get_or_set('strength', 10);
Character.prototype.dexterity = _get_or_set('dexterity', 10);
Character.prototype.intelligence = _get_or_set('intelligence', 10);
Character.prototype.health = _get_or_set('health', 10);
// SECONDARY CHARACTERISTICS
Character.prototype.damage = {};
Character.prototype.damage.thrusting = function () {
  return this.DAMAGE.THRUSTING[this.strength()];
};
Character.prototype.damage.swinging = function () {
  return this.DAMAGE.SWINGING[this.strength()];
};
Character.prototype.hp = _get_or_set('hp');
Character.prototype.hit_points = Character.prototype.hp;
Character.prototype.basic_lift = function () {
  return Math.round(Math.pow(this.strength(), 2) / 5);
};
Character.prototype.basic_speed = function () {
  return (this.dexterity() + this.health()) / 4;
};
Character.prototype.basic_move = function () {
  return Math.floor(this.basic_speed());
};
Character.prototype.max_hp = function () {
  return this.strength();
};
Character.prototype.will = function () {
  return this.intelligence();
};
Character.prototype.perception = function () {
  return this.intelligence();
};
Character.prototype.fatigue = _get_or_set('fatigue');
Character.prototype.max_fatigue = function () {
  return this.health();
};
Character.prototype.encumbrance = function (weight) {
  var encumbrance_levels = [
    this.basic_lift(),
    this.basic_lift() * 2,
    this.basic_lift() * 3,
    this.basic_lift() * 6,
    this.basic_lift() * 10
  ];

  if (!weight) {
    return encumbrance_levels;
  } else {
    for (var i = 0; i < encumbrance_levels.length; i++) {
      if (weight <= encumbrance_levels[i]) {
        return i;
      }
    }
    // TODO what if the given weight is greater
    // than encumbrance 4?
  }
};
/*
  BUILD, AGE, AND BEAUTY
*/
Character.prototype.height = _get_or_set('height');
Character.prototype.weight = _get_or_set('weight');
Character.prototype.size = _get_or_set('size');
Character.prototype.age = _get_or_set('age');
/*
  SOCIAL BACKGROUND
*/
Character.prototype.TLs = _group_get_or_set('TLs', 0);
Character.prototype.cultures = _group_get_or_set('cultures', 0);
Character.prototype.languages = _group_get_or_set('languages', 0);
Character.prototype.literacy = _group_get_or_set('literacy', 0);
/*
  ADVANTAGES
*/
Character.prototype.advantages = _group_get_or_set('advantages', 0);
/*
  DISADVANTAGES
*/
Character.prototype.disadvantages = _group_get_or_set('disadvantages', 0);
/*
  SKILLS
*/
Character.prototype.skills = _group_get_or_set('skills', 0);
/*
  TECHNIQUES
*/
Character.prototype.techniques = _group_get_or_set('techniques', 0);

module.exports = Character;
