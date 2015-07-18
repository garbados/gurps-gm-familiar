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
    route('characters/show',    'CharacterCtrl',        '/characters/:id');
    route('characters/new',     'NewCharacterCtrl',     '/characters/new');
    route('skills/list',        'SkillsCtrl',           '/skills');
    route('skills/show',        'SkillCtrl',            '/skills/:id');
    route('skills/new',         'NewSkillCtrl',         '/skills/new');
    route('techniques/list',    'TechniquesCtrl',       '/techniques');
    route('techniques/show',    'TechniqueCtrl',        '/techniques/:id');
    route('techniques/new',     'NewTechniqueCtrl',     '/techniques/new');
    route('advantages/list',    'AdvantagesCtrl',       '/advantages');
    route('advantages/show',    'AdvantageCtrl',        '/advantages/:id');
    route('advantages/new',     'NewAdvantagesCtrl',    '/advantages/new');
    route('disadvantages/list', 'DisadvantagesCtrl',    '/disadvantages');
    route('disadvantages/show', 'DisadvantageCtrl',     '/disadvantages/:id');
    route('disadvantages/new',  'NewDisadvantagesCtrl', '/disadvantages/new');
    // campaign helpers
    route('locations/list',     'LocationsCtrl',        '/locations');
    route('locations/show',     'LocationCtrl',         '/locations/:id');
    route('locations/new',      'NewLocationCtrl',      '/locations/new');
    route('campaigns/list',     'CampaignsCtrl',        '/campaigns');
    route('campaigns/show',     'CampaignCtrl',         '/campaigns/:id');
    route('campaigns/new',      'NewCampaignCtrl',      '/campaigns/new');
    route('settings/list',      'SettingsCtrl',         '/settings');
    route('settings/show',      'SettingCtrl',          '/settings/:id');
    route('settings/new',       'NewSettingCtrl',       '/settings/new');
    route('calculator',         'CalculatorCtrl',       '/calculator');

    $routeProvider.otherwise({ redirectTo: '/' });
  }
])
// CONSTANTS
.constant('familiar', require('../../../'))
// FACTORIES
// CONTROLLERS
.controller('HomeCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('CharactersCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('CharacterCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('NewCharacterCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('SkillsCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('SkillCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('NewSkillCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('TechniquesCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('TechniqueCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('NewTechniqueCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('AdvantagesCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('AdvantageCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('NewAdvantagesCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('DisadvantagesCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('DisadvantageCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('NewDisadvantagesCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('LocationsCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('LocationCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('NewLocationCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('CampaignsCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('CampaignCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('NewCampaignCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('SettingsCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('SettingCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
])
.controller('NewSettingCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
]);
// FILTERS
