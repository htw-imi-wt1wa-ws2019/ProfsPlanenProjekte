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

exports.up = function(db, callback) {
  db.addColumn('project', 'comment', {
    type: 'string',
    length: '1024',
    notNull: false
  }, function(err) {
    if (err) return callback(err);
    return callback();
  });
};

exports.down = function(db, callback) {
  db.removeColumn('project', 'comment', function(err) {
    if (err) return callback(err);
    return callback();
  });
};

exports._meta = {
  "version": 1
};
