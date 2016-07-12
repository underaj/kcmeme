var mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/protips');
  var db = mongoose.connection;

  db.on('error', function (err) {
    console.error('Something went wrong...', err);
  });

  db.once('open', function() {
    console.log('Database is connected');
  }); 
};
