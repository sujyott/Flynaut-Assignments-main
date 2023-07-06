const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (username, password, done) => {
  // Check if the user exists in the database.
  User.findOne({ email: username }, (err, user) => {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false, { message: 'User not found.' });
    }

    // Check if the password matches.
    if (user.password !== password) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    // Successfully authenticated the user.
    return done(null, user);
  });
}));
