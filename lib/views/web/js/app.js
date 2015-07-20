var app = require('angular').module('app', [
  require('angular-route')  
])
.constant('familiar', require('../../../'))
.config(['$routeProvider', require('./routes')]);

require('./factories').inject(app);
require('./controllers').inject(app);
