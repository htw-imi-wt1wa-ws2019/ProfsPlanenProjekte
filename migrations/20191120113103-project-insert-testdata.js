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

exports.up = function(db) {
  db.insert( 'project', {
    title: "100 Dollar Game",
    lecturer: "Prof. Dr. Strippgen",
    comment: "Unity as Game Engine",
    contact_name: "John Doe",
    contact_email: "johndoe@htw-berlin.de",
    contact_date: "2000-04-03",
    status: false
  }
 );

 db.insert( 'project', {
  title: "Web Application with Rails",
  lecturer: "Prof. Dr. Kleinen",
  comment: "",
  contact_name: "Peter Maffay",
  contact_email: "maffay@htw-berlin.de",
  contact_date: "2018-06-05",
  status: true
}
);

  return db.insert( 'project', {
    title: "Image Vectorizer",
    lecturer: "Prof. Dr. Jung",
    comment: "Use JavaFX as Frontend and Java as Backend",
    contact_name: "Thorsten Throstenson",
    contact_email: "throstenson@htw-berlin.de",
    contact_date: "1990-01-01",
    status: false
  }
 );
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
