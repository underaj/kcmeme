var Protip = require('../protip/protipModel').Protip;

Protip.find().exec()
  .then(function(protips) {
    if (protips.length === 0) {
      Protip.create({content: 'KC is the best', author: 'KC'});
      Protip.create({content: 'KC is the besttt', author: 'KC'});
      Protip.create({content: 'KC is the BESTTT', author: 'KC'});
    }
  });
