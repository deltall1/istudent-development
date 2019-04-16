const router = require('express').Router();
const registrationController = require('../controllers/registration');

router.post('/', registrationController.createUser);

module.exports = router;
