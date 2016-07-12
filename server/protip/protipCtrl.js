var Protip = require('./protipModel');
require('../seed/protipSeed');

module.exports = {
  getByVote: function(req, res) {
    Protip.getByVote(function(protips) {
      res.send(protips);
    });
  },
  getByTime: function(req, res) {
    Protip.getByTime(function(protips) {
      res.send(protips);
    });
  },
  post: function(req, res) {
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
