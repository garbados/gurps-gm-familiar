module.exports = function ($routeProvider) {
  // homepage
  route('home', 'HomeCtrl', '/');
  // character helpers
  resource('Character');
  resource('Advantage');
  resource('Disadvantage');
  resource('Enhancement');
  resource('Limitation');
  resource('Skill');
  resource('Technique');
  resource('Spell');
  // campaign helpers
  resource('Location');
  resource('Campaign');
  resource('Setting');
  // CRUNCH THOSE NUMBERS, SON
  route('calculator', 'CalculatorCtrl', '/calculator');

  // if you get lost just go home
  $routeProvider.otherwise({ redirectTo: '/' });

  // routing convenience :D
  function route (template, ctrl, path) {
    $routeProvider.when(path, {
      templateUrl: template + '.html',
      controller: ctrl
    });
  }

  // CRUDdy convenience!
  function resource(singular, plural) {
    plural = plural || singular + 's';
    var lname = plural.toLowerCase();

    var templates = {
      list: lname + '/list',
      new: lname + '/new',
      edit: lname + '/new',
      show: lname + '/show'
    };
    var controllers = {
      list: plural + 'Ctrl',
      new: 'New' + singular + 'Ctrl',
      edit: 'Edit' + singular + 'Ctrl',
      show: singular + 'Ctrl'
    };
    var paths = {
      list: '/' + lname,
      new: '/' + lname + '/new',
      edit: '/' + lname + '/:id/edit',
      show: '/' + lname + '/:id'
    };

    [
      'list',
      'new',
      'edit',
      'show'
    ].forEach(function (key) {
      route(templates[key], controllers[key], paths[key]);
    });
  }
};

