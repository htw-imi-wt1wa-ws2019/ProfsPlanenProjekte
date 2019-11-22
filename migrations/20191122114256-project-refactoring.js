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
  db.addColumn('project', 'professor', {
    type: 'string',
    length: '255',
    notNull: true
  }, function(err) {
    if (err) return callback(err);
  });

  db.addColumn('project', 'description', {
    type: 'string',
    length: '1024',
    notNull: true
  }, function(err) {
    if (err) return callback(err);
  });

  db.removeColumn('project', 'contact_name', function(err) {
    if (err) return callback(err);
  });

  db.addColumn('project', 'extern_name', {
    type: 'string',
    notNull: false
  }, function(err) {
    if (err) return callback(err);
  });

  db.removeColumn('project', 'contact_email', function(err) {
    if (err) return callback(err);
  });

  db.addColumn('project', 'extern_email', {
    type: 'string',
    notNull: false
  }, function(err) {
    if (err) return callback(err);
  });

  db.removeColumn('project', 'contact_date', function(err) {
    if (err) return callback(err);
  });

  db.addColumn('project', 'extern_date', {
    type: 'date',
    notNull: false
  }, function(err) {
    if (err) return callback(err);
  });

  db.removeColumn('project', 'comment', function(err) {
    if (err) return callback(err);
  });

  db.addColumn('project', 'extern_comment', {
    type: 'string',
    length: '1024',
    notNull: false
  }, function(err) {
    if (err) return callback(err);
  });

  db.runSql('DELETE FROM PROJECT;', null, function(err) {
    if (err) return callback(err);
  });

  db.insert( 'project', {
    title: "100 Dollar Game",
    lecturer: "Markus Lanz",
    professor: "Prof. Dr. Strippgen",
    description: "Implement a 100 Dollar Game with Unity as Game Engine",
    extern_name: "John Doe",
    extern_email: "johndoe@htw-berlin.de",
    extern_date: "2000-04-03",
    extern_comment: "John Doe is not existent",
    status: false
  }
 );

 db.insert( 'project', {
  title: "Web Application with Ruby on Rails",
  lecturer: "Peter Maffay",
  professor: "Prof. Dr. Kleinen",
  description: "Ruby Test-App",
  extern_name: "David Heinemeier Hansson",
  extern_email: "hansson@gmail.com",
  extern_date: "2018-06-05",
  extern_comment: "Met David on a Rails-Congress",
  status: true
});

  return db.insert( 'project', {
    title: "Image Vectorizer",
    lecturer: "Prof. Dr. Jung",
    professor: "Prof. Dr. Jung",
    description: "Use JavaFX as Frontend and Java as Backend",
    status: false
  });

};

exports.down = function(db, callback) {
  db.removeColumn('project', 'professor', function(err) {
    if (err) return callback(err);
  });

  db.removeColumn('project', 'description', function(err) {
    if (err) return callback(err);
  });

  db.addColumn('project', 'contact_name', {
    type: 'string',
    notNull: true
  }, function(err) {
    if (err) return callback(err);
  });

  db.addColumn('project', 'contact_email', {
    type: 'string',
    notNull: false
  }, function(err) {
    if (err) return callback(err);
  });

  db.addColumn('project', 'contact_date', {
    type: 'date',
    notNull: false
  }, function(err) {
    if (err) return callback(err);
  });

  db.addColumn('project', 'comment', {
    type: 'string',
    length: '1024',
    notNull: false
  }, function(err) {
    if (err) return callback(err);
  });

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

exports._meta = {
  "version": 1
};
