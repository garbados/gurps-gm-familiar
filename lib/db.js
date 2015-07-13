var PouchDB = require('pouchdb');

PouchDB.plugin(require('pouchdb-find'));

module.exports = function (name) {
  var db_name = ['gurps', 'familiar', name].join('-');
  return new PouchDB(db_name);
};
