var Protip = require('../protip/protipModel').Protip;

Protip.find().exec()
  .then(function(protips) {
    if (protips.length === 0) {
      Protip.create({topText: 'You know what?', bottomText: 'Angular is awesome', protiper: 'dennisting', author: 'den'});
      Protip.create({topText: 'Use angular', bottomText: 'Because it\'s easy', protiper: 'dennisting', author: 'den'});
      Protip.create({topText: 'Angular!', bottomText: 'WOHO!!!', protiper: 'dennisting', author: 'den'});
    }
  });
