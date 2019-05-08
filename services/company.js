const User = require("../database/models").User;
const Company = require("../database/models").Company;

exports.create = (userID, data) => {
  return User.findOne({ where: { id: userID } }).then(user => {
      return user.createCompany(data)
  })
};
