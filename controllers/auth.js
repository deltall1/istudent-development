const db = require("../config/database");
const User = db.import("../database/models/user");
const jwt = require("jsonwebtoken");
const uuid = require("uuid/v4");
const config = require("../config/keys");

const login = (req, res) => {
  User.findOne({
    where: { email: req.body.email }
  }).then(user => {
    if (!user || !user.validPassword(req.body.password)) {
      res.send("Incorrect login or password");
    } else {
      const refreshToken = uuid();
      res.send({
        accessToken: jwt.sign({ id: user.id }, config.local.secretKey),
        refreshToken: refreshToken
      });
    }
  });
};

module.exports = {
  login
};
