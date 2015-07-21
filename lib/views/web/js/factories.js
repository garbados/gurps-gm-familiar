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
  .factory('getModel', [
    'familiar', '$q',
    function (familiar, $q) {
      return function (name, id) {
        var controller = familiar[name];
        if (id) {
          return controller.get(id);
        } else {
          var model = new controller.model();
          return $q.resolve(model);
        }
      };
    }
  ])
  .factory('getAll', [
    'familiar',
    function (familiar) {
      return function (name) {
        var controller = familiar[name];
        return controller.fetch();
      };
    }
  ])
  .factory('modifyResource', [
    'familiar', '$location',
    function (familiar, $location) {
      return function ($scope, model) {
        $scope[model.type] = model;

        $scope.submit = function () {
          familiar[model.type].save(model)
          .then(function () {
            $location.path('/' + model.type + 's');
          });
        };
      };
    }
  ])
  .factory('preloadResources', [
    'familiar', '$q',
    function (familiar, $q) {
      return function ($scope, names) {
        var promises = names.map(function (name) {
          return familiar[name].fetch()
          .then(function (docs) {
            $scope.$apply(function () {
              $scope[name] = docs;
            });
          });
        });

        return $q.all(promises);
      };
    }
  ])
  .factory('modifyCharacter', [
    'modifyResource', 'preloadResources',
    function (modifyResource, preloadResources) {
      var sections = [
        'attributes',
        'advantages',
        'disadvantages',
        'skills',
        'techniques',
        'spells'
      ];

      return function ($scope, model) {
        preloadResources($scope, sections);
        modifyResource($scope, model);
      };
    }
  ])
 .factory('modifyVantage', [
    'familiar', 'modifyResource',
    function (familiar, modifyResource) {
      return function ($scope, model) {
        modifyResource($scope, model);

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
      };
    }
  ])
  .factory('modifyAdvantage', [
    'modifyVantage',
    function (modifyVantage) {
      return modifyVantage;
    }
  ])
  .factory('modifyDisadvantage', [
    'modifyVantage',
    function (modifyVantage) {
      return modifyVantage;
    }
  ])
  .factory('modifyEnhancement', [
    'modifyResource',
    function (modifyResource) {
      return modifyResource;
    }
  ])
  .factory('modifyLimitation', [
    'modifyResource',
    function (modifyResource) {
      return modifyResource;
    }
  ])
  .factory('modifySkill', [
    'modifyResource',
    function (modifyResource) {
      return modifyResource;
    }
  ])
  .factory('modifyTechnique', [
    'modifyResource',
    function (modifyResource) {
      return modifyResource;
    }
  ])
   .factory('modifySpell', [
    'modifyResource',
    function (modifyResource) {
      return modifyResource;
    }
  ]);
};
