const { Router } = require('express');
const db = require('/Users/joseph/Documents/appLuciana/main/db.js');
const auth = require('/Users/joseph/Documents/appLuciana/main/auth.js');
const bodyParser = require('body-parser')

const router = Router();

router.use(bodyParser.json())
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

router.get('/apps/:id', auth.authenticateToken, db.getAppsByUser)
router.post('/login', db.login)
router.get('/allapps/:category', db.getAllApps)
router.post('/signIn', db.signIn)
router.post('/apps', auth.authenticateToken, db.createApp)
router.post('/buy', auth.authenticateToken, db.buy)

router.put('/apps/:id', auth.authenticateToken, db.updateApp)

router.delete('/apps/:id', auth.authenticateToken, db.deleteApp)

router.get('/login', login_get = (req, res) => {
    res.render('login');
  });
router.get('/signup', signup_get = (req, res) => {
    res.render('signup');
  });

module.exports = router;