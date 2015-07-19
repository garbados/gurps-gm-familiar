var Characters =    require('./controllers/characters');
var Attributes =    require('./controllers/attributes');
var Advantages =    require('./controllers/advantages');
var Disadvantages = require('./controllers/disadvantages');
var Skills =        require('./controllers/skills');
var Techniques =    require('./controllers/techniques');
var Spells =        require('./controllers/spells');
// var Psionics =      require('./controllers/psionics');

module.exports = {
  characters: new Characters(),
  attributes: new Attributes(),
  advantages: new Advantages(),
  disadvantages: new Disadvantages(),
  skills: new Skills(),
  techniques: new Techniques(),
  spells: new Spells(),
  // psionics: new Psionics()
};
