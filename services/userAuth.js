const issueToken = require("./issueToken");

exports.create = user => {
  const userAuthTokens = user.createUserAuth(issueToken.issueToken(user.id));
  return userAuthTokens;
};