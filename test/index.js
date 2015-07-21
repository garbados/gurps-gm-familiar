var assert = require('assert');

var familiar;
if (process.env.NODE_DEBUG) {
  familiar = require('../lib-cov');
} else {
  familiar = require('..');
}

var Characters = familiar.characters;
var Character = familiar.characters.model;

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

describe('characters controller', function () {
  before(function () {
    // create models for use
    this.characters = new Characters.constructor();
    this.test_character = new Characters.model();
    this.test_character.name = "D'argo";
    this.test_character.strength = 12;
  });
  after(function () {
    return this.characters.db.destroy();
  });
  it('should persist models to disk', function () {
    var self = this;

    return this.characters.save(this.test_character)
    .then(function (res) {
      assert.equal(res.ok, true);
      return self.characters.get(self.test_character.name);
    })
    .then(function (character) {
      assert.equal(character.strength, self.test_character.strength);
    });
  });
  it.skip('should handle queries', function () {
    var self = this;

    return this.characters.find({
      selector: {name: "D'argo"},
      fields: ['name']
    })
    .then(function (character) {
      console.log(arguments);
    });
  });
});
