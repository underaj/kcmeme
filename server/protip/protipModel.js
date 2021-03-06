var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var protipSchema = new Schema({
  topText: {type: String, required: true},
  bottomText: {type: String, required: true},
  protiper: {type: String, required: true},
  author: {type: String, required: true},
  votes: {type: Number, default: 0}
});

protipSchema.set('timestamps', true);

var Protip = mongoose.model('Protip', protipSchema);

module.exports.Protip = Protip;

module.exports.getByVote = function(cb) {
  Protip.find().sort('-votes').exec()
  .then(function(protips) {
    cb(protips);
  });
};

module.exports.getByTime = function(cb) {
  Protip.find().sort('-createdAt').exec()
  .then(function(protips) {
    cb(protips);
  });
};

module.exports.saveNewProtip = function(postObj, cb) {
  var protip = new Protip( postObj );
  protip.save(function(err, result) {
    if (err) {
      console.log(err);
    } else {
      cb(result);  
    }
  });
};

module.exports.upVote = function(searchContent, cb) {
  Protip.findOne( searchContent )
    .exec(function(err, protip) { 
      if (err) {
        console.log(err); 
      } else if (protip) {
        protip.votes++;
        protip.save(function(err, data) {
          cb(protip);  
        });
      }
    });
};

