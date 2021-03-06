"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("StudentCourses", ["courseID"], {
        type: "foreign key",
        name: "FK_StudentCourses_courseID",
        references: {
          table: "Courses",
          field: "id"
        }
      }),
      queryInterface.addConstraint("StudentCourses", ["studentID"], {
        type: "foreign key",
        name: "FK_StudentCourses_studentID",
        references: {
          table: "Students",
          field: "id"
        }
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.removeConstraint(
        "StudentCourses",
        "FK_StudentCourses_courseID"
      ),
      queryInterface.removeConstraint(
        "StudentCourses",
        "FK_StudentCourses_studentID"
      )
    );
  }
};
