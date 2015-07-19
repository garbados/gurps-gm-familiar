var BaseModel = require('./base');
var util = require('util');
var utils = require('../utils');

function Character () {
  BaseModel.apply(this, arguments);
}

util.inherits(Character, BaseModel);

Character.type = 'character';

// DESCRIPTORS
utils.define_getter_setter(Character.prototype, 'name');
utils.define_getter_setter(Character.prototype, 'height');
utils.define_getter_setter(Character.prototype, 'weight');
utils.define_getter_setter(Character.prototype, 'age');
utils.define_getter_setter(Character.prototype, 'size');

// ATTRIBUTES
utils.define_getter_setter(Character.prototype, 'strength', 10);
utils.define_getter_setter(Character.prototype, 'dexterity', 10);
utils.define_getter_setter(Character.prototype, 'intelligence', 10);
utils.define_getter_setter(Character.prototype, 'health', 10);

// ADVANTAGES, SKILLS, ETC.
utils.define_section(Character.prototype, 'advantages', false);
utils.define_section(Character.prototype, 'disadvantages', false);
utils.define_section(Character.prototype, 'skills', 0);
utils.define_section(Character.prototype, 'techniques', 0);

// HEALTH AND FATIGUE
Object.defineProperty(Character.prototype, 'hp', {
  get: function () {
    return this._hp || this.max_hp;
  },
  set: function (value) {
    this._hp = value;
  }
});

Object.defineProperty(Character.prototype, 'max_hp', {
  get: function () {
    return this.strength;
  }
});

Object.defineProperty(Character.prototype, 'fp', {
  get: function () {
    return this._fp || this.max_fp;
  },
  set: function (value) {
    this._fp = value;
  }
});

Object.defineProperty(Character.prototype, 'max_fp', {
  get: function () {
    return this.health;
  }
});

// DERIVED CHARACTERISTICS

Object.defineProperty(Character.prototype, 'damage', {
  // TODO
});
Object.defineProperty(Character.prototype, 'basic_lift', {
  // TODO
});
Object.defineProperty(Character.prototype, 'basic_speed', {
  // TODO
});
Object.defineProperty(Character.prototype, 'basic_move', {
  // TODO
});
Object.defineProperty(Character.prototype, 'will', {
  // TODO
});
Object.defineProperty(Character.prototype, 'perception', {
  // TODO
});
Object.defineProperty(Character.prototype, 'encumbrance', {
  // TODO
});

module.exports = Character;
