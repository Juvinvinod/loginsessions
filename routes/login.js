var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    var username = req.body.username;
  var password = req.body.password;
  if (username === 'admin@gmail.com' && password === 'password') {
    req.session.loggedIn = true;
    res.render('index');
  } else {
    res.render('login', { error: 'Incorrect username or password' });
  }
  });

module.exports = router;
