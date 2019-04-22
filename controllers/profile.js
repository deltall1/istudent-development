const User = require('../database/models').User;

const getAllUser = (req, res) => {
    User.findAll().then(user => {
        res.send(user);
    });
};

module.exports = {
    getAllUser
};