exports.inject = function (app) {
  app
  .controller('HomeCtrl', [
    'seedAll', '$scope',
    function (seedAll, $scope) {
      $scope.seed = function () {
        seedAll().finally(function () {
          $scope.needs_seed = false;
          $scope.ready = true;
        });
      };
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
      getModel('characters')
      .then(function (doc) {
        modifyCharacter($scope, doc);
      });
    }
  ])
  .controller('EditCharacterCtrl', [
    'getModel', 'modifyCharacter', '$scope', '$routeParams',
    function (getModel, modifyCharacter, $scope, $routeParams) {
      getModel('characters', $routeParams.id)
      .then(function (doc) {
        $scope.$apply(function () {
          modifyCharacter($scope, doc);
        });
      });
    }
  ])
  .controller('SkillsCtrl', [
    'getAll', '$scope',
    function (getAll, $scope) {
      getAll('skills')
      .then(function (docs) {
        $scope.$apply(function () {
          $scope.skills = docs;
        });
      });
    }
  ])
  .controller('SkillCtrl', [
    'getModel', '$scope', '$routeParams',
    function (getModel, $scope, $routeParams) {
      getModel('skills', $routeParams.id)
      .then(function (doc) {
        $scope.$apply(function () {
          $scope.skill = doc;
        });
      });
    }
  ])
  .controller('NewSkillCtrl', [
    'getModel', 'modifySkill', '$scope',
    function (getModel, modifySkill, $scope) {
      getModel('skills')
      .then(function (doc) {
        modifySkill($scope, doc);
      });
    }
  ])
  .controller('EditSkillCtrl', [
    'getModel', 'modifySkill', '$scope', '$routeParams',
    function (getModel, modifySkill, $scope, $routeParams) {
      getModel('skills', $routeParams.id)
      .then(function (doc) {
        $scope.$apply(function () {
          modifySkill($scope, doc);
        });
      });
    }
  ])
  .controller('TechniquesCtrl', [
    'getAll', '$scope',
    function (getAll, $scope) {
      getAll('techniques').then(function (docs) {
        $scope.$apply(function () {
          $scope.techniques = docs;
        });
      });
    }
  ])
  .controller('TechniqueCtrl', [
    'getModel', '$scope', '$routeParams',
    function (getModel, $scope, $routeParams) {
      getModel('techniques', $routeParams.id)
      .then(function (doc) {
        $scope.$apply(function () {
          $scope.technique = doc;
        });
      });
    }
  ])
  .controller('NewTechniqueCtrl', [
    'getModel', 'modifyTechnique', '$scope',
    function (getModel, modifyTechnique, $scope) {
      getModel('techniques')
      .then(function (doc) {
        $scope.$apply(function () {
          modifyTechnique($scope, doc);
        });
      });
    }
  ])
  .controller('EditTechniqueCtrl', [
    'getModel', 'modifyTechnique', '$scope', '$routeParams',
    function (getModel, modifyTechnique, $scope, $routeParams) {
      getModel('techniques', $routeParams.id)
      .then(function (doc) {
        $scope.$apply(function () {
          modifyTechnique($scope, doc);
        });
      });
    }
  ])
  .controller('AdvantagesCtrl', [
    'getAll', '$scope',
    function (getAll, $scope) {
      getAll('advantages')
      .then(function (docs) {
        $scope.$apply(function () {
          $scope.advantages = docs;
        });
      });
    }
  ])
  .controller('AdvantageCtrl', [
    'getModel', '$scope', '$routeParams',
    function (getModel, $scope, $routeParams) {
      getModel('advantages', $routeParams.id)
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
      getModel('advantages')
      .then(function (doc) {
        modifyAdvantage($scope, doc);
      });
    }
  ])
  .controller('EditAdvantageCtrl', [
    'getModel', 'modifyAdvantage', '$scope', '$routeParams',
    function (getModel, modifyAdvantage, $scope, $routeParams) {
      getModel('advantages', $routeParams.id)
      .then(function (doc) {
        $scope.$apply(function () {
          modifyAdvantage($scope, doc);
        });
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
    function (getModel, $scope, $routeParams) {
      getModel('disadvantages', $routeParams.id)
      .then(function (doc) {
        $scope.$apply(function () {
          $scope.disadvantage = doc;
        });
      });
    }
  ])
  .controller('NewDisadvantageCtrl', [
    'getModel', 'modifyDisadvantage', '$scope',
    function (getModel, modifyDisadvantage, $scope) {
      getModel('disadvantages')
      .then(function (doc) {
        modifyDisadvantage($scope, doc);
      });
    }
  ])
  .controller('EditDisadvantageCtrl', [
    'getModel', 'modifyDisadvantage', '$scope', '$routeParams',
    function (getModel, modifyDisadvantage, $scope, $routeParams) {
      getModel('disadvantages', $routeParams.id)
      .then(function (disadvantage) {
        $scope.$apply(function () {
          modifyDisadvantage($scope, disadvantage);
        });
      });
    }
  ])
  .controller('EnhancementCtrl', [
    'getModel', '$scope', '$routeParams',
    function (getModel, $scope, $routeParams) {
      getModel('enhancements', $routeParams.id)
      .then(function (doc) {
        $scope.$apply(function () {
          $scope.enhancement = doc;
        });
      });
    }
  ])
  .controller('EnhancementsCtrl', [
    'getAll', '$scope',
    function (getAll, $scope) {
      getAll('enhancements')
      .then(function (docs) {
        $scope.$apply(function () {
          $scope.enhancement = docs;
        });
      });
    }
  ])
  .controller('NewEnhancementCtrl', [
    'getModel', 'modifyEnhancement', '$scope',
    function (getModel, modifyEnhancement, $scope) {
      getModel('enhancements')
      .then(function (doc) {
        modifyEnhancement($scope, doc);
      });
    }
  ])
  .controller('EditEnhancementCtrl', [
    'getModel', 'modifyEnhancement', '$scope', '$routeParams',
    function (getModel, modifyEnhancement, $scope, $routeParams) {
      getModel('enhancements', $routeParams.id)
      .then(function (doc) {
        $scope.$apply(function () {
          modifyEnhancement($scope, doc);
        });
      });
    }
  ])
  .controller('LimitationCtrl', [
    'getModel', '$scope', '$routeParams',
    function (getModel, $scope, $routeParams) {
      getModel('limitations', $routeParams.id)
      .then(function (doc) {
        $scope.$apply(function () {
          $scope.limitation = doc;
        });
      });
    }
  ])
  .controller('LimitationsCtrl', [
    'getAll', '$scope',
    function (getAll, $scope) {
      getAll('limitations')
      .then(function (docs) {
        $scope.$apply(function () {
          $scope.limitations = docs;
        });
      });
    }
  ])
  .controller('NewLimitationCtrl', [
    'getModel', 'modifyLimitation', '$scope',
    function (getModel, modifyLimitation, $scope) {
      getModel('limitations')
      .then(function (doc) {
        modifyLimitation($scope, doc);
      });
    }
  ])
  .controller('EditLimitationCtrl', [
    'getModel', 'modifyLimitation', '$scope', '$routeParams',
    function (getModel, modifyLimitation, $scope, $routeParams) {
      getModel('limitations', $routeParams.id)
      .then(function (doc) {
        $scope.$apply(function () {
          modifyLimitation($scope, doc);
        });
      });
    }
  ])
  .controller('SpellCtrl', [
    'getModel', '$scope', '$routeParams',
    function (getModel, $scope, $routeParams) {
      getModel('spells', $routeParams.id)
      .then(function (doc) {
        $scope.$apply(function () {
          $scope.spell = doc;
        });
      });
    }
  ])
  .controller('SpellsCtrl', [
    'getAll', '$scope',
    function (getAll, $scope) {
      getAll('spells')
      .then(function (docs) {
        $scope.$apply(function () {
          $scope.spells = docs;
        });
      });
    }
  ])
  .controller('NewSpellCtrl', [
    'getModel', 'modifySpell', '$scope',
    function (getModel, modifySpell, $scope) {
      getModel('spells')
      .then(function (doc) {
        modifySpell($scope, doc);
      });
    }
  ])
  .controller('EditSpellCtrl', [
    'getModel', 'modifySpell', '$scope', '$routeParams',
    function (getModel, modifySpell, $scope, $routeParams) {
      getModel('spells', $routeParams.id)
      .then(function (doc) {
        $scope.$apply(function () {
          modifySpell($scope, doc);
        });
      });
    }
  ])
  // TODO CAMPAIGN HELPERS
  .controller('LocationsCtrl', [])
  .controller('LocationCtrl', [])
  .controller('NewLocationCtrl', [])
  .controller('EditLocationCtrl', [])
  .controller('CampaignsCtrl', [])
  .controller('CampaignCtrl', [])
  .controller('NewCampaignCtrl', [])
  .controller('EditCampaignCtrl', [])
  .controller('SettingsCtrl', [])
  .controller('SettingCtrl', [])
  .controller('NewSettingCtrl', [])
  .controller('EditSettingCtrl', [])
  // NUMBERS ARE FOR NERDS
  .controller('CalculatorCtrl', []);
};
