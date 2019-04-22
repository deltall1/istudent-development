const router = require("express").Router();
const profileController = require("../controllers/profile");

router.get("/", profileController.getAllUser);

module.exports = router;