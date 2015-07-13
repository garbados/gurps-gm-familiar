var assert = require('assert');
var Character = require('../../lib/models/character');

describe('characters', function () {
  it('should create a character with derived characteristics', function () {
    var test_character = new Character();
    // character has base stats
    assert.equal(test_character.max_hp, test_character.strength);
    // but you can modify them
    // and the derived stats change
    test_character.strength = 12;
    assert.equal(test_character.max_hp, test_character.strength);
    // things like skills have default values too
    assert.equal(test_character.skills('Acting'), 0);
    // serialize
    var json = test_character.json;
    // deserialize
    var test_character2 = new Character(json);
    assert.equal(test_character.strength, test_character2.strength);
  });
  it('should use getters and setters behind the scenes', function () {
    var test_character = new Character();
    // instances have getters and setters, not the class
    assert.equal(Character.strength, undefined);
    // setter writes to private property
    test_character.strength = 12;
    assert.equal(test_character.strength, test_character._strength);
    // retains inherited methods
    var json = test_character.json;
    assert.equal(test_character.strength, json.strength);
  });
});
