const User = require('../database/models').User;
const jwt = require("jsonwebtoken");
const uuid = require("uuid/v4");
const config = require("../config/app");

const login = (req, res) => {
    User.findOne({
        where: {email: req.body.email}
    }).then(user => {
        if (!user || !user.validPassword(req.body.password)) {
            res.send("Incorrect login or password");
        } else {
            const refreshToken = uuid();
            res.send({
                accessToken: jwt.sign({userId: user.id}, config.secretKey),
                refreshToken: refreshToken
            });
        }
    });
};

const google = (req, res) => {
    res.send(req.user)
}

module.exports = {
    login,
    google,
};
