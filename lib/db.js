var PouchDB = require('pouchdb');

PouchDB.plugin(require('pouchdb-find'));

module.exports = function (name) {
  var db_name = ['gurps', 'familiar', name].join('-');
  // TODO use memdown if testing
  return new PouchDB(db_name);
};
