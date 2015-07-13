var PouchDB = require('pouchdb');

PouchDB.plugin(require('pouchdb-find'));

module.exports = function (name, opts) {
  var db_name = ['gurps', 'familiar', name].join('-');
  return new PouchDB(db_name, opts);
};
