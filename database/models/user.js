"use strict";
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatarUrl: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: user => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        }
      }
    }
  );

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.associate = function(models) {
    User.hasOne(models.Student),
    User.hasOne(models.Company),
    User.hasOne(models.Recruiter)
    User.hasMany(models.UserAuth),
    User.hasOne(models.UserRole)
  };
  return User;
};
