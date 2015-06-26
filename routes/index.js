var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
});
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/game', function(req, res, next) {
  user_id = req.cookies.user_id;
  if (user_id) {
    res.render('game', {user_id: user_id});
  } else res.redirect('/');
});

router.post('/userLogin', function(req, res, next) {
  var id, pwd;
  id = req.body.inputID;
  pwd = req.body.inputPassword;
  connection.query('SELECT * FROM `dma`.`users` WHERE `user_id` = \''+id+'\'', function(err, rows, fields) {
    if (err) res.send('Oops, there\'s something wrong with the server.');
    else if (rows.length==1 && pwd===rows[0].password) {
      res.cookie('user_id', id, { maxAge: 60000 });
      res.redirect('/game');
    } else res.send('Wrong user_id or password!');
  });
});

router.post('/userLogout', function(req, res, next) {
  res.clearCookie('user_id');
  res.redirect('/');
});

router.get('/reg', function(req, res, next) {
  res.render('register', {});
});

router.post('/userRegister', function(req, res, next) {
  var id, pwd;
  id = req.body.inputID;
  pwd = req.body.inputPassword;
  if (pwd !== req.body.confirmPassword) {
    req.send('Error: the passwords are not the same!');
  } else {
    connection.query('INSERT INTO `dma`.`users` (`user_id`, `password`) VALUES (\''+id+'\', \''+pwd+'\')', function(err, rows, fields) {
      if (err) res.send('Error: register failed.');
      else res.send('Register succeeded.');
    });
  }
});

module.exports = router;
