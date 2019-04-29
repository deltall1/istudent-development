'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserAuths', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      accessToken: {
        unique: true,
        type: Sequelize.STRING
      },
      refreshToken: {
        unique: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserAuths');
  }
};