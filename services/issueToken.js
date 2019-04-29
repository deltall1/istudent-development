const jwt = require("jsonwebtoken");
const uuid = require("uuid/v4");
const config = require("../config/app");

exports.issueToken = data => {
  return {
    accessToken: jwt.sign(data, config.secretKey),
    refreshToken: uuid()
  };
};
