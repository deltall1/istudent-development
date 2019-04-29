const issueToken = require("./token");

exports.create = user => {
  const userAuthTokens = user.createUserAuth(issueToken.issueToken(user.id));
  return userAuthTokens;
};