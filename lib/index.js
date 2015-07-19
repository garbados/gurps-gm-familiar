var Characters =    require('./controllers/characters');
var Advantages =    require('./controllers/advantages');
var Disadvantages = require('./controllers/disadvantages');
var Skills =        require('./controllers/skills');
var Techniques =    require('./controllers/techniques');

function init () {
  return {
    characters: new Characters(),
    advantages: new Advantages()
  };
}

module.exports = init;
