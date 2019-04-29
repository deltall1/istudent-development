'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return (
        queryInterface.addConstraint('Students', ['id'], {
          type: 'foreign key',
          name: 'FK_Students_id',
          references: {
            table: 'Users',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('Students', ['city'], {
          type: 'foreign key',
          name: 'FK_Students_city',
          references: {
            table: 'Cities',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('Education', ['studentID'], {
          type: 'foreign key',
          name: 'FK_Education_studentID',
          references: {
            table: 'Students',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('Education', ['institution'], {
          type: 'foreign key',
          name: 'FK_Education_institution',
          references: {
            table: 'Institutions',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('AdditionalEducations', ['studentID'], {
          type: 'foreign key',
          name: 'FK_AdditionalEducations_studentID',
          references: {
            table: 'Students',
            field: 'id'
          }
        }),
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
        }),
        queryInterface.addConstraint('StudentHasManyRoles', ['projectID'], {
          type: 'foreign key',
          name: 'FK_StudentHasManyRoles_projectID',
          references: {
            table: 'Projects',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('StudentHasManyRoles', ['roleID'], {
          type: 'foreign key',
          name: 'FK_StudentHasManyRoles_roleID',
          references: {
            table: 'ProjectRoles',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('WorkExperiences', ['studentID'], {
          type: 'foreign key',
          name: 'FK_WorkExperiences_studentID',
          references: {
            table: 'Students',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('UserRoles', ['id'], {
          type: 'foreign key',
          name: 'FK_UserRoles_userID',
          references: {
            table: 'Users',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('UserRoles', ['roleID'], {
          type: 'foreign key',
          name: 'FK_UserRoles_roleID',
          references: {
            table: 'Roles',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('Companies', ['id'], {
          type: 'foreign key',
          name: 'FK_Companies_userID',
          references: {
            table: 'Users',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('Companies', ['city'], {
          type: 'foreign key',
          name: 'FK_Companies_city',
          references: {
            table: 'Cities',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('Recruiters', ['id'], {
          type: 'foreign key',
          name: 'FK_Recruiters_userID',
          references: {
            table: 'Users',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('Recruiters', ['companyID'], {
          type: 'foreign key',
          name: 'FK_Recruiters_companyID',
          references: {
            table: 'Companies',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('StudentSkills', ['studentID'], {
          type: 'foreign key',
          name: 'FK_StudentSkills_studentID',
          references: {
            table: 'Students',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('StudentSkills', ['skillID'], {
          type: 'foreign key',
          name: 'FK_StudentSkills_skillID',
          references: {
            table: 'Skills',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('StudentTechnologies', ['studentID'], {
          type: 'foreign key',
          name: 'FK_StudentTechnologies_studentID',
          references: {
            table: 'Students',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('StudentTechnologies', ['technologyID'], {
          type: 'foreign key',
          name: 'FK_StudentTechnologies_technologyID',
          references: {
            table: 'Technologies',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('Vacancies', ['companyID'], {
          type: 'foreign key',
          name: 'FK_Vacancies_companyID',
          references: {
            table: 'Companies',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('Vacancies', ['positionID'], {
          type: 'foreign key',
          name: 'FK_Vacancies_positionID',
          references: {
            table: 'Positions',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('StudentVacancies', ['studentID'], {
          type: 'foreign key',
          name: 'FK_StudentVacancies_studentID',
          references: {
            table: 'Students',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('StudentVacancies', ['vacancyID'], {
          type: 'foreign key',
          name: 'FK_StudentVacancies_vacancyID',
          references: {
            table: 'Vacancies',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('VacancySkills', ['vacancyID'], {
          type: 'foreign key',
          name: 'FK_VacancySkills_vacancyID',
          references: {
            table: 'Vacancies',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('VacancySkills', ['skillID'], {
          type: 'foreign key',
          name: 'FK_VacancySkills_skillID',
          references: {
            table: 'Skills',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('VacancyTechnologies', ['vacancyID'], {
          type: 'foreign key',
          name: 'FK_VacancyTechnologies_vacancyID',
          references: {
            table: 'Vacancies',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('VacancyTechnologies', ['technologyID'], {
          type: 'foreign key',
          name: 'FK_VacancyTechnologies_technologyID',
          references: {
            table: 'Technologies',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('Courses', ['companyID'], {
          type: 'foreign key',
          name: 'FK_Courses_companyID',
          references: {
            table: 'Companies',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('StudentCourses', ['courseID'], {
          type: 'foreign key',
          name: 'FK_StudentCourses_courseID',
          references: {
            table: 'Courses',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('StudentCourses', ['studentID'], {
          type: 'foreign key',
          name: 'FK_StudentCourses_studentID',
          references: {
            table: 'Students',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('CourseSkills', ['courseID'], {
          type: 'foreign key',
          name: 'FK_CourseSkills_courseID',
          references: {
            table: 'Courses',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('CourseSkills', ['skillID'], {
          type: 'foreign key',
          name: 'FK_CourseSkills_skillID',
          references: {
            table: 'Skills',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('CourseTechnologies', ['courseID'], {
          type: 'foreign key',
          name: 'FK_CourseTechnologies_courseID',
          references: {
            table: 'Courses',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('CourseTechnologies', ['technologyID'], {
          type: 'foreign key',
          name: 'FK_CourseTechnologies_technologyID',
          references: {
            table: 'Technologies',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('CoursePartners', ['courseID'], {
          type: 'foreign key',
          name: 'FK_CoursePartners_courseID',
          references: {
            table: 'Courses',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('CoursePartners', ['companyID'], {
          type: 'foreign key',
          name: 'FK_CoursePartners_companyID',
          references: {
            table: 'Companies',
            field: 'id'
          }
        }),
        queryInterface.addConstraint('UserAuths', ['id'], {
          type: 'foreign key',
          name: 'FK_UserAuth_id',
          references: {
            table: 'Users',
            field: 'id'
          }
        })
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.removeConstraint('Student', 'FK_Students_id'),
      queryInterface.removeConstraint('Student', 'FK_Students_city'),
      queryInterface.removeConstraint('Education', 'FK_Education_studentID'),
      queryInterface.removeConstraint('Education', 'FK_Education_institution'),
      queryInterface.removeConstraint('AdditionalEducations', 'FK_AdditionalEducations_studentID'),
      queryInterface.removeConstraint('StudentProjects', 'FK_StudentProjects_studentID'),
      queryInterface.removeConstraint('StudentProjects', 'FK_StudentProjects_projectID'),
      queryInterface.removeConstraint('StudentHasManyRoles', 'FK_StudentHasManyRoles_projectID'),
      queryInterface.removeConstraint('StudentHasManyRoles', 'FK_StudentHasManyRoles_roleID'),
      queryInterface.removeConstraint('WorkExperiences', 'FK_WorkExperiences_studentID'),
      queryInterface.removeConstraint('UserRoles', 'FK_UserRoles_userID'),
      queryInterface.removeConstraint('UserRoles', 'FK_UserRoles_roleID'),
      queryInterface.removeConstraint('Companies', 'FK_Companies_userID'),
      queryInterface.removeConstraint('Companies', 'FK_Companies_city'),
      queryInterface.removeConstraint('Recruiters', 'FK_Recruiters_userID'),
      queryInterface.removeConstraint('Recruiters', 'FK_Recruiters_companyID'),
      queryInterface.removeConstraint('StudentSkills', 'FK_StudentSkills_studentID'),
      queryInterface.removeConstraint('StudentSkills', 'FK_StudentSkills_skillID'),
      queryInterface.removeConstraint('StudentTechnologies', 'FK_StudentTechnologies_studentID'),
      queryInterface.removeConstraint('StudentTechnologies', 'FK_StudentTechnologies_technologyID'),
      queryInterface.removeConstraint('Vacancies', 'FK_Vacancies_companyID'),
      queryInterface.removeConstraint('Vacancies', 'FK_Vacancies_positionID'),
      queryInterface.removeConstraint('StudentVacancies', 'FK_StudentVacancies_studentID'),
      queryInterface.removeConstraint('StudentVacancies', 'FK_StudentVacancies_vacancyID'),
      queryInterface.removeConstraint('VacancySkills', 'FK_VacancySkills_vacancyID'),
      queryInterface.removeConstraint('VacancySkills', 'FK_VacancySkills_skillID'),
      queryInterface.removeConstraint('VacancyTechnologies', 'FK_VacancyTechnologies_vacancyID'),
      queryInterface.removeConstraint('VacancyTechnologies', 'FK_VacancyTechnologies_technologyID'),
      queryInterface.removeConstraint('Courses', 'FK_Courses_companyID'),
      queryInterface.removeConstraint('StudentCourses', 'FK_StudentCourses_courseID'),
      queryInterface.removeConstraint('StudentCourses', 'FK_StudentCourses_studentID'),
      queryInterface.removeConstraint('CourseSkills', 'FK_CourseSkills_courseID'),
      queryInterface.removeConstraint('CourseSkills', 'FK_CourseSkills_skillID'),
      queryInterface.removeConstraint('CourseTechnologies', 'FK_CourseTechnologies_courseID'),
      queryInterface.removeConstraint('CourseTechnologies', 'FK_CourseTechnologies_technologyID'),
      queryInterface.removeConstraint('CoursePartners', 'FK_CoursePartners_courseID'),
      queryInterface.removeConstraint('CoursePartners', 'FK_CoursePartners_companyID'),
      queryInterface.removeConstraint("UserAuth", "FK_UserAuth_id")
    );
  }
};
