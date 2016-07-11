var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var protipSchema = new Schema({
  content: {type: String, required: true},
  author: {type: String, required: true},
  votes: {type: Number, default: 0}
});

protipSchema.set('timestamps', true);

var Protip = mongoose.model('Protip', protipSchema);

module.exports.Protip = Protip;

module.exports.getAll = function(cb) {
  Protip.find().sort('-votes').exec()
  .then(function(Protips) {
    cb(Protips);
  });
};

module.exports.saveNewProtip = function(postObj, cb) {
  var content = postObj.content;
  var author = postObj.username;
  Protip.findOne( {protip: protip} )
    .exec(function(err, result) { 
      if (err) {
        console.log(err); 
      } else if (result) {
        cb(result);
      } else {
        var protip = new Protip( {content: title, author: author} );
        protip.save(function(err, result) {
          if (err) {
            console.log(err);
          }
          cb(result);
        });
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

