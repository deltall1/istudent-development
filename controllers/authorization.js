const userService = require("../services/user");
const userAuthService = require("../services/userAuth");

exports.signIn = (req, res) => {
  userService.findByEmail(req.body.email).then(user => {
    console.log(user.dataValues);
    if (!user || !user.validPassword(req.body.password)) {
      res.status(403).send("Incorrect login or password");
    } else {
      userAuthService.create(user).then(userTokens => {
        res.status(200).json({
          accessToken: userTokens.accessToken,
          refreshToken: userTokens.refreshToken
        });
      });
    }
  });
};

exports.signInWithGoogle = (req, res) => {
  userAuthService.create(req.user.id).then(userTokens => {
    res.status(200).send(userTokens);
  });
};
