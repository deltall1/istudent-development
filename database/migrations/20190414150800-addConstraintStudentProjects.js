'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return (
        queryInterface.addConstraint('StudentProjects', ['studentID'], {
          type: 'foreign key',
          name: 'FK_StudentProjects_studentID',
          references: {
            table: 'Students',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('StudentProjects', ['projectID'], {
          type: 'foreign key',
          name: 'FK_StudentProjects_projectID',
          references: {
            table: 'Projects',
            field: 'id'
          }
        })
      );
  },

  down: (queryInterface, Sequelize) => {
      return (
        queryInterface.removeConstraint('StudentProjects', 'FK_StudentProjects_studentID'),
        queryInterface.removeConstraint('StudentProjects', 'FK_StudentProjects_projectID')
      );
  }
};