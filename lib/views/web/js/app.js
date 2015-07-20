require('angular').module('app', [
  require('angular-route')
])
// ROUTES
.config([
  '$routeProvider',
  function ($routeProvider) {
    // routing convenience :D
    function route (template, ctrl, path) {
      $routeProvider.when(path, {
        templateUrl: template + '.html',
        controller: ctrl
      });
    }

    // route templates, controllers, and paths
    // homepage
    route('home',               'HomeCtrl',             '/');
    // character helpers
    route('characters/list',    'CharactersCtrl',       '/characters');
    route('characters/new',     'NewCharacterCtrl',     '/characters/new');
    route('characters/new',     'EditCharacterCtrl',    '/characters/:id/edit');
    route('characters/show',    'CharacterCtrl',        '/characters/:id');
    route('skills/list',        'SkillsCtrl',           '/skills');
    route('skills/new',         'NewSkillCtrl',         '/skills/new');
    route('skills/new',         'EditSkillCtrl',        '/skills/:id/edit');
    route('skills/show',        'SkillCtrl',            '/skills/:id');
    route('techniques/list',    'TechniquesCtrl',       '/techniques');
    route('techniques/new',     'NewTechniqueCtrl',     '/techniques/new');
    route('techniques/new',     'EditTechniqueCtrl',    '/techniques/:id/edit');
    route('techniques/show',    'TechniqueCtrl',        '/techniques/:id');
    route('advantages/list',    'AdvantagesCtrl',       '/advantages');
    route('advantages/new',     'NewAdvantageCtrl',     '/advantages/new');
    route('advantages/new',     'EditAdvantageCtrl',    '/advantages/:id/edit');
    route('advantages/show',    'AdvantageCtrl',        '/advantages/:id');
    route('disadvantages/list', 'DisadvantagesCtrl',    '/disadvantages');
    route('disadvantages/new',  'NewDisadvantageCtrl',  '/disadvantages/new');
    route('disadvantages/new',  'EditDisadvantageCtrl', '/disadvantages/:id/edit');
    route('disadvantages/show', 'DisadvantageCtrl',     '/disadvantages/:id');
    route('enhancements/list',  'EnhancementsCtrl',     '/enhancements');
    route('enhancements/new',   'NewEnhancementCtrl',   '/enhancements/new');
    route('enhancements/new',   'EditEnhancementCtrl',  '/enhancements/:id/edit');
    route('enhancements/show',  'EnhancementCtrl',      '/enhancements/:id');
    route('limitations/list',   'LimitationsCtrl',      '/limitations');
    route('limitations/new',    'NewLimitationCtrl',    '/limitations/new');
    route('limitations/new',    'EditLimitationCtrl',   '/limitations/:id/edit');
    route('limitations/show',   'LimitationCtrl',       '/limitations/:id');
    route('spells/list',        'SpellsCtrl',           '/spells');
    route('spells/new',         'NewSpellCtrl',         '/spells/new');
    route('spells/new',         'EditSpellCtrl',        '/spells/:id/edit');
    route('spells/show',        'SpellCtrl',            '/spells/:id');
    // campaign helpers
    route('locations/list',     'LocationsCtrl',        '/locations');
    route('locations/new',      'NewLocationCtrl',      '/locations/new');
    route('locations/new',      'EditLocationCtrl',     '/locations/:id/edit');
    route('locations/show',     'LocationCtrl',         '/locations/:id');
    route('campaigns/list',     'CampaignsCtrl',        '/campaigns');
    route('campaigns/new',      'NewCampaignCtrl',      '/campaigns/new');
    route('campaigns/new',      'EditCampaignCtrl',     '/campaigns/:id/edit');
    route('campaigns/show',     'CampaignCtrl',         '/campaigns/:id');
    route('settings/list',      'SettingsCtrl',         '/settings');
    route('settings/new',       'NewSettingCtrl',       '/settings/new');
    route('settings/new',       'EditSettingCtrl',      '/settings/:id/edit');
    route('settings/show',      'SettingCtrl',          '/settings/:id');
    route('calculator',         'CalculatorCtrl',       '/calculator');

    $routeProvider.otherwise({ redirectTo: '/' });
  }
])
// CONSTANTS
.constant('familiar', require('../../../'))
// FACTORIES
.factory('saveDocs', [
  'familiar', '$q',
  function (familiar, $q) {
    return function (name) {
      return function (docs) {
        if (!docs) return [];

        var promises = docs.map(function (doc) {
          return familiar[name].save_json(doc);
        });

        return $q.all(promises);
      };
    };
  }
])
.factory('seed', [
  '$http', 'saveDocs',
  function ($http, saveDocs) {
    return function (model_name) {
      var filepath = 'fixtures/' + model_name + '.json';
      var save = saveDocs(model_name);
      return $http.get(filepath).success(save);
    };
  }
])
.factory('seedAll', [
  'seed', '$q',
  function (seed, $q) {
    return function () {
      return $q.all([
        seed('characters'),
        seed('attributes'),
        seed('advantages'),
        seed('disadvantages'),
        seed('enhancements'),
        seed('limitations'),
        seed('skills'),
        seed('techniques'),
        seed('spells')
      ]);
    };
  }
])
.factory('modifyCharacter', [
  'familiar', '$location', '$q',
  function (familiar, $location, $q) {
    var sections = [
      'attributes',
      'advantages',
      'disadvantages',
      'skills',
      'techniques',
      'spells'
    ];

    return function ($scope, model) {
      var promises = sections.map(function (name) {
        return familiar[name].fetch()
        .then(function (docs) {
          $scope.$apply(function () {
            $scope[name] = docs;
          });
        });
      });

      $q.all(promises);

      // TODO

      $scope.submit = function () {
        familiar[model.type].save(model)
        .then(function () {
          $location.path('/characters');
        });
      };
    }
  }
])
.factory('modifySkill', [
  'familiar', '$location',
  function (familiar, $location) {
    return function ($scope, model) {
      // TODO

      $scope.submit = function () {
        familiar[model.type].save(model)
        .then(function () {
          $location.path('/skills');
        });
      };
    };
  }
])
.factory('modifyTechnique', [
  'familiar', '$location',
  function (familiar, $location) {
    return function ($scope, model) {
      // TODO

      $scope.submit = function () {
        familiar[model.type].save(model)
        .then(function () {
          $location.path('/techniques');
        });
      };
    }
  }
])
.factory('modifyAdvantage', [
  'familiar', '$location',
  function (familiar, $location) {
    return function ($scope, model) {
      $scope[model.type] = model;

      $scope.addEnhancement = function () {
        var enhancement = new familiar.enhancements.model();
        model.enhancements.push(enhancement);
      };

      $scope.removeEnhancement = function (i) {
        model.enhancements.splice(i, 1);
      };

      $scope.addLimitation = function () {
        var limitation = new familiar.limitations.model();
        model.limitations.push(limitation);
      };

      $scope.removeLimitation = function (i) {
        model.limitations.splice(i, 1);
      };

      $scope.submit = function () {
        familiar[model.type].save(model)
        .then(function () {
          $location.path('/advantages');
        });
      };
    };
  }
])
.factory('modifyDisadvantage', [
  'familiar', '$location',
  function (familiar, $location) {
    return function ($scope, model) {
      $scope[model.type] = model;

      $scope.addEnhancement = function () {
        var enhancement = new familiar.enhancements.model();
        model.enhancements.push(enhancement);
      };

      $scope.removeEnhancement = function (i) {
        model.enhancements.splice(i, 1);
      };

      $scope.addLimitation = function () {
        var limitation = new familiar.limitations.model();
        model.limitations.push(limitation);
      };

      $scope.removeLimitation = function (i) {
        model.limitations.splice(i, 1);
      };

      $scope.submit = function () {
        familiar[model.type].save(model)
        .then(function () {
          $location.path('/disadvantages');
        });
      };
    };
  }
])
.factory('modifyEnhancement', [
  'familiar', '$location',
  function (familiar, $location) {
    return function ($scope, model) {
      $scope.enhancement = model;

      // TODO

      $scope.submit = function () {
        familiar.enhancements.save(model)
        .then(function () {
          $location.path('/enhancements');
        })
      };
    };
  }
])
.factory('modifyLimitation', [
  'familiar', '$location',
  function (familiar, $location) {
    return function ($scope, model) {
      $scope.limitation = model;

      // TODO

      $scope.submit = function () {
        familiar.limitations.save(model)
        .then(function () {
          $location.path('/limitations');
        });
      };
    };
  }
])
.factory('modifySpell', [
  'familiar', '$location',
  function (familiar, $location) {
    return function ($scope, model) {
      $scope.spell = model;

      // TODO

      $scope.submit = function () {
        familiar.spells.save(model)
        .then(function () {
          $location.path('/spells');
        });
      };
    };
  }
])
// CONTROLLERS
.controller('HomeCtrl', [
  'familiar', 'seedAll', '$scope',
  function (familiar, seedAll, $scope) {
    $scope.seed = function () {
      seedAll().finally(function () {
        $scope.needs_seed = false;
        $scope.ready = true;
      });
    };

    $scope.loading = true;
    familiar.advantages.fetch()
    .then(function (advantages) {
      $scope.$apply(function () {
        $scope.loading = false;
        if (advantages.length) {
          $scope.ready = true;
        } else {
          $scope.needs_seed = true;
        }
      });
    });
  }
])
.controller('CharactersCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    familiar.characters.fetch()
    .then(function (docs) {
      $scope.$apply(function () {
        $scope.characters = docs;
      });
    });
  }
])
.controller('CharacterCtrl', [
  'familiar', '$scope', '$routeParams',
  function (familiar, $scope, $routeParams) {
    var character = new familiar.characters.get($routeParams.id)
    .then(function (doc) {
      $scope.$apply(function () {
        $scope.character = character;
      });
    });
  }
])
.controller('NewCharacterCtrl', [
  'familiar', 'modifyCharacter', '$scope',
  function (familiar, modifyCharacter, $scope, $q) {
    var character = new familiar.characters.model();
    modifyCharacter($scope, character);
  }
])
.controller('EditCharacterCtrl', [
  'familiar', 'modifyCharacter', '$scope', '$routeParams',
  function (familiar, modifyCharacter, $scope, $routeParams) {
    familiar.characters.get($routeParams.id)
    .then(function (doc) {
      $scope.$apply(function () {
        modifyCharacter($scope, doc);
      });
    });
  }
])
.controller('SkillsCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    familiar.skills.fetch()
    .then(function (docs) {
      $scope.$apply(function () {
        $scope.skills = docs;
      });
    });
  }
])
.controller('SkillCtrl', [
  'familiar', '$scope', '$routeParams',
  function (familiar, $scope, $routeParams) {
    familiar.skills.get($routeParams.id)
    .then(function (doc) {
      $scope.$apply(function () {
        $scope.skill = doc;
      });
    });
  }
])
.controller('NewSkillCtrl', [
  'familiar', 'modifySkill', '$scope',
  function (familiar, modifySkill, $scope) {
    var skill = new familiar.skills.model();
    modifySkill($scope, skill);
  }
])
.controller('EditSkillCtrl', [
  'familiar', 'modifySkill', '$scope', '$routeParams',
  function (familiar, modifySkill, $scope, $routeParams) {
    familiar.skills.get($routeParams.id)
    .then(function (doc) {
      modifySkill($scope, doc);
    });
  }
])
.controller('TechniquesCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    familiar.techniques.fetch().then(function (docs) {
      $scope.$apply(function () {
        $scope.techniques = docs;
      });
    });
  }
])
.controller('TechniqueCtrl', [
  'familiar', '$scope', '$routeParams',
  function (familiar, $scope, $routeParams) {
    familiar.techniques.get($routeParams.id)
    .then(function (doc) {
      $scope.$apply(function () {
        $scope.technique = doc;
      });
    });
  }
])
.controller('NewTechniqueCtrl', [
  'familiar', 'modifyTechnique', '$scope',
  function (familiar, $scope) {
    var technique = new familiar.techniques.model();
    modifyTechnique($scope, technique);
  }
])
.controller('EditTechniqueCtrl', [
  'familiar', 'modifyTechnique', '$scope', '$routeParams',
  function (familiar, modifyTechnique, $scope, $routeParams) {
    familiar.techniques.get($routeParams.id)
    .then(function (doc) {
      modifyTechnique($scope, doc);
    });
  }
])
.controller('AdvantagesCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    familiar.advantages.fetch()
    .then(function (docs) {
      $scope.$apply(function () {
        $scope.advantages = docs;
      });
    });
  }
])
.controller('AdvantageCtrl', [
  'familiar', '$scope', '$routeParams',
  function (familiar, $scope, $routeParams) {
    familiar.advantages.get($routeParams.id)
    .then(function (doc) {
      $scope.$apply(function () {
        $scope.advantage = doc;
      });
    });
  }
])
.controller('NewAdvantageCtrl', [
  'familiar', 'modifyAdvantage', '$scope',
  function (familiar, modifyAdvantage, $scope) {
    var advantage = new familiar.advantages.model();
    modifyAdvantage($scope, advantage);
  }
])
.controller('EditAdvantageCtrl', [
  'familiar', 'modifyAdvantage', '$scope', '$routeParams',
  function (familiar, modifyAdvantage, $scope, $routeParams) {
    familiar.advantages.get($routeParams.id)
    .then(function (advantage) {
      $scope.$apply(function () {
        modifyAdvantage($scope, advantage);
      });
    });
  }
])
.controller('DisadvantagesCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    familiar.disadvantages.fetch().then(function (docs) {
      $scope.$apply(function () {
        $scope.disadvantages = docs;
      });
    });
  }
])
.controller('DisadvantageCtrl', [
  'familiar', '$scope', '$routeParams',
  function (familiar, $scope, $routeParams) {
    familiar.disadvantages.get($routeParams.id)
    .then(function (doc) {
      $scope.$apply(function () {
        $scope.disadvantage = doc;
      });
    });
  }
])
.controller('NewDisadvantageCtrl', [
  'familiar', 'modifyDisadvantage', '$scope',
  function (familiar, modifyDisadvantage, $scope) {
    var disadvantage = new familiar.disadvantages.model();
    modifyDisadvantage($scope, disadvantage);
  }
])
.controller('EditDisadvantageCtrl', [
  'familiar', 'modifyDisadvantage', '$scope', '$routeParams',
  function (familiar, modifyDisadvantage, $scope, $routeParams) {
    familiar.disadvantages.get($routeParams.id)
    .then(function (disadvantage) {
      $scope.$apply(function () {
        modifyDisadvantage($scope, disadvantage);
      });
    });
  }
])
.controller('EnhancementCtrl', [
  'familiar', '$scope', '$routeParams',
  function (familiar, $scope, $routeParams) {
    familiar.enhancements.get($routeParams)
    .then(function (doc) {
      $scope.enhancement = doc;
    });
  }
])
.controller('EnhancementsCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    familiar.enhancements.fetch()
    .then(function (docs) {
      $scope.enhancement = docs;
    })
  }
])
.controller('NewEnhancementCtrl', [
  'familiar', 'modifyEnhancement', '$scope',
  function (familiar, modifyEnhancement, $scope) {
    var enhancement = new familiar.enhancements.model();
    modifyEnhancement($scope, enhancement);
  }
])
.controller('EditEnhancementCtrl', [
  'familiar', 'modifyEnhancement', '$scope', '$routeParams',
  function (familiar, modifyEnhancement, $scope, $routeParams) {
    familiar.enhancements.get($routeParams.id)
    .then(function (doc) {
      $scope.$apply(function () {
        modifyEnhancement($scope, doc);
      });
    });
  }
])
.controller('LimitationCtrl', [
  'familiar', '$scope', '$routeParams',
  function (familiar, $scope, $routeParams) {
    familiar.limitations.get($routeParams)
    .then(function (doc) {
      $scope.limitation = doc;
    });
  }
])
.controller('LimitationsCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    familiar.limitations.fetch()
    .then(function (docs) {
      $scope.limitations = docs;
    });
  }
])
.controller('NewLimitationCtrl', [
  'familiar', 'modifyLimitation', '$scope',
  function (familiar, modifyLimitation, $scope) {
    var limitation = new familiar.limitations.model();
    modifyLimitation($scope, limitation);
  }
])
.controller('EditLimitationCtrl', [
  'familiar', 'modifyLimitation', '$scope', '$routeParams',
  function (familiar, modifyLimitation, $scope, $routeParams) {
    familiar.limitations.get($routeParams.id)
    .then(function (doc) {
      $scope.$apply(function () {
        modifyLimitation($scope, doc);
      });
    });
  }
])
.controller('SpellCtrl', [
  'familiar', '$scope', '$routeParams',
  function (familiar, $scope, $routeParams) {
    familiar.spells.get($routeParams)
    .then(function (doc) {
      $scope.spell = doc;
    });
  }
])
.controller('SpellsCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    familiar.spells.fetch()
    .then(function (docs) {
      $scope.spells = docs;
    });
  }
])
.controller('NewSpellCtrl', [
  'familiar', 'modifySpell', '$scope',
  function (familiar, modifySpell, $scope) {
    var spell = new familiar.spells.model();
    modifySpell($scope, spell);
  }
])
.controller('EditSpellCtrl', [
  'familiar', 'modifySpell', '$scope', '$routeParams',
  function (familiar, modifySpell, $scope, $routeParams) {
    familiar.spells.get($routeParams.id)
    .then(function (doc) {
      $scope.$apply(function () {
        modifySpell($scope, doc);
      });
    });
  }
])
// CAMPAIGN HELPERS
.controller('LocationsCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    // TODO
  }
])
.controller('LocationCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    // TODO
  }
])
.controller('NewLocationCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    // TODO
  }
])
.controller('CampaignsCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    // TODO
  }
])
.controller('CampaignCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    // TODO
  }
])
.controller('NewCampaignCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    // TODO
  }
])
.controller('SettingsCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    // TODO
  }
])
.controller('SettingCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    // TODO
  }
])
.controller('NewSettingCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    // TODO
  }
])
.controller('CalculatorCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {
    // TODO
  }
]);
