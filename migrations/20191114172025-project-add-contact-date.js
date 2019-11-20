'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

// Function up is called with 'npm run migrate up'
// Changes the database structure of the given database, declared in database.json
exports.up = function(db, callback) {
  db.addColumn('project', 'contact_date', {
    type: 'date',
  }, function(err) {
    if (err) return callback(err);
    return callback();
  });
};

// Function down is called with 'npm run migrate down'
// Reverts the changes from migrate up in the given database, declared in database.json
exports.down = function(db, callback) {
  db.removeColumn('project', 'contact_date', function(err) {
    if (err) return callback(err);
    return callback();
  });
};

exports._meta = {
  "version": 1
};
