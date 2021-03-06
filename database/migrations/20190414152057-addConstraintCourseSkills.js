"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("CourseSkills", ["courseID"], {
        type: "foreign key",
        name: "FK_CourseSkills_courseID",
        references: {
          table: "Courses",
          field: "id"
        }
      }),
      queryInterface.addConstraint("CourseSkills", ["skillID"], {
        type: "foreign key",
        name: "FK_CourseSkills_skillID",
        references: {
          table: "Skills",
          field: "id"
        }
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.removeConstraint(
        "CourseSkills",
        "FK_CourseSkills_courseID"
      ),
      queryInterface.removeConstraint("CourseSkills", "FK_CourseSkills_skillID")
    );
  }
};
