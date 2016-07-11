var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../user/userModel');

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      // if (!user.validPassword(password)) {
      //   return done(null, false, { message: 'Incorrect password.' });
      // }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.username);
});

passport.deserializeUser(function(username, done) {
  User.findOne( {username: username} )
    .exec(function(err, userObj) { 
      if (err) {
        console.log(err); 
      } else if (userObj) {
        done(null, userObj);
      } else {
        done();
      }
    });
});

