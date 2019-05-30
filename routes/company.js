const router = require("express").Router();
const vacancy = require("../controllers/vacancy");

router.post("/createVacancy", vacancy.createVacancy);

module.exports = router;