'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAuth = sequelize.define('UserAuth', {
    accessToken: DataTypes.STRING,
    refreshToken: DataTypes.STRING
  }, {});
  UserAuth.associate = function(models) {
    UserAuth.belongsTo(models.User, { foreignKey: 'id' })
  };
  return UserAuth;
};