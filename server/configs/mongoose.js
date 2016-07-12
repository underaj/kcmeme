var mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://heroku_l6g6p74f:bl8namrrgacu72qft9d0vs59j6@ds017514.mlab.com:17514/heroku_l6g6p74f' || 'mongodb://localhost/protips');
  var db = mongoose.connection;

  db.on('error', function (err) {
    console.error('Something went wrong...', err);
  });

  db.once('open', function() {
    console.log('Database is connected');
  }); 
};
