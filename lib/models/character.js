var BaseModel = require('./base');
var util = require('util');
var utils = require('../utils');

function Character () {
  BaseModel.apply(this, arguments);
}

Character.type = 'character';

util.inherits(Character, BaseModel);

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

Object.defineProperty(Character.prototype, 'damage', {});
Object.defineProperty(Character.prototype, 'basic_lift', {});
Object.defineProperty(Character.prototype, 'basic_speed', {});
Object.defineProperty(Character.prototype, 'basic_move', {});
Object.defineProperty(Character.prototype, 'will', {});
Object.defineProperty(Character.prototype, 'perception', {});
Object.defineProperty(Character.prototype, 'encumbrance', {});

utils.define_section(Character.prototype, 'advantages', false);
utils.define_section(Character.prototype, 'disadvantages', false);
utils.define_section(Character.prototype, 'skills', 0);
utils.define_section(Character.prototype, 'techniques', 0);

module.exports = Character;
