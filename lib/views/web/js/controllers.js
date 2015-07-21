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
    'getAll', '$scope',
    function (getAll, $scope) {
      getAll('characters')
      .then(function (docs) {
        $scope.$apply(function () {
          $scope.characters = docs;
        });
      });
    }
  ])
  .controller('CharacterCtrl', [
    'getModel', '$scope', '$routeParams',
    function (getModel, $scope, $routeParams) {
      getModel('characters', $routeParams.id)
      .then(function (doc) {
        $scope.$apply(function () {
          $scope.character = character;
        });
      });
    }
  ])
  .controller('NewCharacterCtrl', [
    'getModel', 'modifyCharacter', '$scope',
    function (getModel, modifyCharacter, $scope, $q) {
      getModel('characters').then(function (doc) {
        modifyCharacter($scope, doc);
      });
    }
  ])
  .controller('EditCharacterCtrl', [
    'getModel', 'modifyCharacter', '$scope', '$routeParams',
    function (getModel, modifyCharacter, $scope, $routeParams) {
      getModel('characters', $routeParams.id).then(function (doc) {
        modifyCharacter($scope, doc);
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
    'getModel', 'modifyAdvantage', '$scope',
    function (getModel, modifyAdvantage, $scope) {
      getModel('advantages').then(function (doc) {
        modifyAdvantage($scope, doc);
      });
    }
  ])
  .controller('EditAdvantageCtrl', [
    'getModel', 'modifyAdvantage', '$scope', '$routeParams',
    function (getModel, modifyAdvantage, $scope, $routeParams) {
      getModel('advantages', $routeParams.id).then(function (doc) {
        modifyAdvantage($scope, doc);
      });
    }
  ])
  .controller('DisadvantagesCtrl', [
    'getAll', '$scope',
    function (getAll, $scope) {
      getAll('disadvantages').then(function (docs) {
        $scope.$apply(function () {
          $scope.disadvantages = docs;
        });
      });
    }
  ])
  .controller('DisadvantageCtrl', [
    'getModel', '$scope', '$routeParams',
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
    'getModel', 'modifyDisadvantage', '$scope',
    function (familiar, modifyDisadvantage, $scope) {
      var disadvantage = new familiar.disadvantages.model();
      modifyDisadvantage($scope, disadvantage);
    }
  ])
  .controller('EditDisadvantageCtrl', [
    'getModel', 'modifyDisadvantage', '$scope', '$routeParams',
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
    'getModel', '$scope', '$routeParams',
    function (familiar, $scope, $routeParams) {
      familiar.enhancements.get($routeParams)
      .then(function (doc) {
        $scope.enhancement = doc;
      });
    }
  ])
  .controller('EnhancementsCtrl', [
    'getAll', '$scope',
    function (familiar, $scope) {
      familiar.enhancements.fetch()
      .then(function (docs) {
        $scope.enhancement = docs;
      });
    }
  ])
  .controller('NewEnhancementCtrl', [
    'getModel', 'modifyEnhancement', '$scope',
    function (familiar, modifyEnhancement, $scope) {
      var enhancement = new familiar.enhancements.model();
      modifyEnhancement($scope, enhancement);
    }
  ])
  .controller('EditEnhancementCtrl', [
    'getModel', 'modifyEnhancement', '$scope', '$routeParams',
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
    'getModel', '$scope', '$routeParams',
    function (familiar, $scope, $routeParams) {
      familiar.limitations.get($routeParams)
      .then(function (doc) {
        $scope.limitation = doc;
      });
    }
  ])
  .controller('LimitationsCtrl', [
    'getAll', '$scope',
    function (familiar, $scope) {
      familiar.limitations.fetch()
      .then(function (docs) {
        $scope.limitations = docs;
      });
    }
  ])
  .controller('NewLimitationCtrl', [
    'getModel', 'modifyLimitation', '$scope',
    function (familiar, modifyLimitation, $scope) {
      var limitation = new familiar.limitations.model();
      modifyLimitation($scope, limitation);
    }
  ])
  .controller('EditLimitationCtrl', [
    'getModel', 'modifyLimitation', '$scope', '$routeParams',
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
    'getModel', '$scope', '$routeParams',
    function (familiar, $scope, $routeParams) {
      familiar.spells.get($routeParams)
      .then(function (doc) {
        $scope.spell = doc;
      });
    }
  ])
  .controller('SpellsCtrl', [
    'getAll', '$scope',
    function (familiar, $scope) {
      familiar.spells.fetch()
      .then(function (docs) {
        $scope.spells = docs;
      });
    }
  ])
  .controller('NewSpellCtrl', [
    'getModel', 'modifySpell', '$scope',
    function (familiar, modifySpell, $scope) {
      var spell = new familiar.spells.model();
      modifySpell($scope, spell);
    }
  ])
  .controller('EditSpellCtrl', [
    'getModel', 'modifySpell', '$scope', '$routeParams',
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
  .controller('LocationsCtrl', [])
  .controller('LocationCtrl', [])
  .controller('NewLocationCtrl', [])
  .controller('CampaignsCtrl', [])
  .controller('CampaignCtrl', [])
  .controller('NewCampaignCtrl', [])
  .controller('SettingsCtrl', [])
  .controller('SettingCtrl', [])
  .controller('NewSettingCtrl', [])
  .controller('CalculatorCtrl', []);
};
