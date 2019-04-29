"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("StudentCourses", {
      courseID: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      studentID: {
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
    return queryInterface.dropTable("StudentCourses");
  }
};
