const express = require('express');
const app = express();

app.use(passport.initialize());
app.use(passport.session());

// Routes for logging in and out.
app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
}));

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});
