const router = require('express').Router();

router.get('/', (req, res) =>{
    res.send('Hello Team (.)(.)')
});

module.exports = router;