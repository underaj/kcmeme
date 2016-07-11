var Protip = require('./protipModel');
require('../seed/protipSeed');

module.exports = {
  get: function(req, res) {
    Protip.getAll(function(protips) {
      res.send(protips);
    });
  },
  getOne: function(req, res) {
    // var id = req.params.id;
    // res.send(surveys[id]);
  },
  post: function(req, res) {
    console.log(req.body);
    Protip.saveNewProtip(req.body, function(protip) {
      res.status(200).send(protip);
    });
  },
  upvote: function(req, res) {
    Protip.upVote(req.body, function(obj) {
      res.status(200).send(obj);
    });
  }
};
