var assert = require('assert');

var familiar;
if (process.env.NODE_DEBUG) {
  familiar = require('../lib-cov');
} else {
  familiar = require('..');
}

describe('characters', function () {
  test_model_and_controller('characters');

  before(function () {
    this.Characters = familiar.characters;
    this.Character = this.Characters.model;
  });

  it('should have derivative stats', function () {
    var test_model = new this.Character();

    // model has base stats
    assert.equal(test_model.max_hp, test_model.strength);

    // but you can modify them
    // and the derived stats change
    test_model.strength = 12;
    assert.equal(test_model.max_hp, test_model.strength);

    // things like skills have default values too
    assert.equal(test_model.skills('Acting'), 0);
  });
});

describe('advantages', function () {
  test_model_and_controller('advantages');
});

describe('attributes', function () {
  test_model_and_controller('attributes');
});

describe('characters', function () {
  test_model_and_controller('characters');
});

describe('disadvantages', function () {
  test_model_and_controller('disadvantages');
});

describe('enhancements', function () {
  test_model_and_controller('enhancements');
});

describe('limitations', function () {
  test_model_and_controller('limitations');
});

describe('skills', function () {
  test_model_and_controller('skills');
});

describe('spells', function () {
  test_model_and_controller('spells');
});

describe('techniques', function () {
  test_model_and_controller('techniques');
});

function test_model_and_controller (name) {
  var Controller = familiar[name];
  var Model = familiar[name].model;

  describe('model', function () {
    it('should serialize to and from JSON', function () {
      var test_model = new Model();
      // serialize
      var json = test_model.json;
      // EVEN TO STRING, OH SUGARSNAP!
      var json_string = JSON.stringify(json);
      var json_parsed = JSON.parse(json_string);
      assert.deepEqual(json, json_parsed);
      // deserialize
      var test_model2 = new Model(json);
      assert.equal(test_model.strength, test_model2.strength);
    });

    it('should use getters and setters behind the scenes', function () {
      var test_model = new Model();
      // classes have different names by default
      assert.notEqual(Model.name, test_model.name);
      // setter writes to private property
      test_model.name = 'the sound of laughter';
      assert.equal(test_model.name, test_model._name);
      // retains inherited methods
      var json = test_model.json;
      assert.equal(test_model.name, json.name);
    });
  });

  describe('controller', function () {
    before(function () {
      // create models for use
      this.controller = new Controller.constructor();
      this.test_model = new this.controller.model();
      this.test_model.name = "D'argo";
    });
    after(function () {
      return this.controller.db.destroy();
    });
    it('should persist models to disk', function () {
      var self = this;

      return this.controller.save(this.test_model)
      .then(function (res) {
        assert.equal(res.ok, true);
        return self.controller.get(self.test_model.name);
      })
      .then(function (model) {
        assert.equal(model.name, self.test_model.name);
      });
    });

    it.skip('should handle queries', function () {
      var self = this;

      return this.controller.find({
        selector: {name: "D'argo"},
        fields: ['name']
      })
      .then(function (model) {
        console.log(arguments);
      });
    });
  });
}
