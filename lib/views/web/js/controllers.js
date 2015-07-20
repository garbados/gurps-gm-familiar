exports.inject = function (app) {
  app
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
      console.log('hello');
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
};
