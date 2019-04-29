const router = require('express').Router();
const regController = require("../controllers/registration");

router.post('/', regController.signUp);

module.exports = router;
