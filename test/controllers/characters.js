var assert = require('assert');
var Characters = require('../../lib/controllers/characters');

describe('characters controller', function () {
  before(function () {
    // create models for use
    this.characters = new Characters();
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
