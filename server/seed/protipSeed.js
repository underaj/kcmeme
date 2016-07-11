var Protip = require('../protip/protipModel').Protip;

Protip.find().exec()
  .then(function(protips) {
    if (protips.length === 0) {
      Protip.create({topText: 'KC is the best', bottomText: 'really', author: 'KC'});
      Protip.create({topText: 'KC is the best', bottomText: 'really', author: 'KC'});
      Protip.create({topText: 'KC is the best', bottomText: 'really', author: 'KC'});
    }
  });
