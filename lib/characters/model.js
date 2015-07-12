var utils = require('./utils');
var _get_or_set = utils._get_or_set;
var _group_get_or_set = utils._group_get_or_set;

function Character (opts) {
  // use opts to give things starting values
  if (opts) {
    Object.keys(this)
    .forEach(function (name) {
      this['_' + name] = opts[name];
    });
  }
}

// serialize to save, etc.
Character.prototype.jsonify = function () {
  var self = this;
  var json = {};
  Object.keys(this)
  .filter(function (name) {
    return name[0] === '_';
  })
  .forEach(function (name) {
    json[name.slice(1)] = self[name];
  });
};

// ATTRIBUTES
Character.prototype.strength = _get_or_set('strength', 10);
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
Character.prototype.hp = _get_or_set('hit_points');
Character.prototype.hit_points = Character.prototype.hp;
// Character.prototype.basic_lift
// Character.prototype.basic_speed
// Character.prototype.basic_move
Character.prototype.max_hp = function () {
  return this.strength();
};
// Character.prototype.will
// Character.prototype.perception
// Character.prototype.fatique
// Character.prototype.encumbrance
/*
  BUILD, AGE, AND BEAUTY
*/
// Character.prototype.height
// Character.prototype.weight
// Character.prototype.size
// Character.prototype.age
// Character.prototype.appearance
/*
  SOCIAL BACKGROUND
*/
// Character.prototype.TLs
// Character.prototype.cultures
// Character.prototype.languages
// Character.prototype.literacy
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
