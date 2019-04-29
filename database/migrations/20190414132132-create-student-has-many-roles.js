"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("StudentHasManyRoles", {
      projectID: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      roleID: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable("StudentHasManyRoles");
  }
};
