const router = require('express').Router();
const authController = require('../controllers/auth');
const passport = require('passport');

router.post('/', authController.login);
router.get(
    '/google', 
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/redirect', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  authController.google
);

module.exports = router;