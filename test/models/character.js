var assert = require('assert');
var Character = require('../../lib/models/character');

describe('characters', function () {
  it('should create a character with derived characteristics', function () {
    var test_character = new Character();
    // character has base stats
    assert(test_character.max_hp());
    // but you can modify them
    // and the derived stats change
    test_character.strength(12);
    assert.equal(test_character.max_hp(), test_character.strength());
    // things like skills have default values too
    assert.equal(typeof test_character.skills('acting'), 'number');
    // serialize
    var json = test_character.jsonify();
    // deserialize
    var test_character2 = new Character(json);
    assert.equal(test_character.strength(), test_character2.strength());
  });
});
