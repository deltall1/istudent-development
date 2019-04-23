  const User = require("../database/models").User;

module.exports = {
  getAllUser: (req, res) => {
    User.findAll().then(user => {
      res.send(user);
    });
  }
};