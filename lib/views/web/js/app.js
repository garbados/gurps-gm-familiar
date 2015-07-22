var app = require('angular').module('app', [
  require('angular-route')
])
.constant('familiar', require('../../../'))
.config(['$routeProvider', require('./routes')])
.run(['seedAll', function (seedAll) {
  seedAll();
}]);

require('./factories').inject(app);
require('./controllers').inject(app);
