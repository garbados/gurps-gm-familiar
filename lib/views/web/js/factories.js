exports.inject = function (app) {
  app
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
      };
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
      };
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
          });
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
  ]);
};
