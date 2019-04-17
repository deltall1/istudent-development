const db = require("../core/database");
const User = db.import("../database/models/user");
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

module.exports = {
    login
};
