var User = require('./userModel');

module.exports = {
  signup: function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne( {username: username} )
      .exec(function(err, user) {
        if (err) {
          console.log(err); 
        } else if (user) {
          console.log('User name already exists');
          res.redirect('/');
        } else {
          user = new User( {username: username, password: password} );
          user.save(function(err, savedUser) {
            if (err) {            
              console.log(err);
            } else {
              req.login(savedUser, function(err) { 
                if (err) {
                  console.log('error');
                } else {
                  res.redirect('/');
                }
              });
            }
          });
        }
      });
  },
  signin: function(req, res) {
    User.findOne( {username: req.body.username} )
      .exec(function(err, user) {
        if (err) {
          console.log(error);
        } else if (user) {
          user.comparepasswords(req.body.password, function(isMatch) {
            if (isMatch) {
              req.login(user, function(err) { 
                if (err) {
                  console.log('error');
                } else {
                  console.log('User logged in');
                  res.redirect('/');
                }
              });
            } else {
              console.log('Incorrect username and password combination');
              res.redirect('/');
            }
          });
        } else {
          console.log('User does not exist');
          res.redirect('/');
        }
      });
  },
  signout: function(req, res) {
    req.logout();
    res.redirect('/');
  },
  getUserDetail: function(req, res) {
    if (req.user) {
      res.send(req.user);
    } else {
      res.send({username: 'ANONYMOUS'});
    }
  }
};
