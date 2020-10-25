var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')


const users = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

router.get('/login', function(req, res, next) {
  res.render('login.ejs');
});

router.post('/login', function(req, res, next) {

});

router.get('/register', function(req, res, next) {
  res.render('register.ejs');
});

router.post('/register', async function (req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })

    res.redirect('/views/login')
  } catch(e) {
    const err = new Error(e);
    next(err);
  }
  console.log(users)
});

module.exports = router;
