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
    route('characters/show',    'CharacterCtrl',        '/characters/:id');
    route('skills/list',        'SkillsCtrl',           '/skills');
    route('skills/new',         'NewSkillCtrl',         '/skills/new');
    route('skills/show',        'SkillCtrl',            '/skills/:id');
    route('techniques/list',    'TechniquesCtrl',       '/techniques');
    route('techniques/new',     'NewTechniqueCtrl',     '/techniques/new');
    route('techniques/show',    'TechniqueCtrl',        '/techniques/:id');
    route('advantages/list',    'AdvantagesCtrl',       '/advantages');
    route('advantages/new',     'NewAdvantagesCtrl',    '/advantages/new');
    route('advantages/show',    'AdvantageCtrl',        '/advantages/:id');
    route('disadvantages/list', 'DisadvantagesCtrl',    '/disadvantages');
    route('disadvantages/new',  'NewDisadvantagesCtrl', '/disadvantages/new');
    route('disadvantages/show', 'DisadvantageCtrl',     '/disadvantages/:id');
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
  function (familiar, $scope) {
    console.log('home');
  }
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
  function (familiar, $scope) {
    console.log('characters/new');
  }
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
])
.controller('CalculatorCtrl', [
  'familiar', '$scope',
  function (familiar, $scope) {}
]);
// FILTERS
