const db = require("../core/database");

const User = db.import("./models/user");
const Student = db.import("./models/student");
const StudentCourse = db.import("./models/studentcourse");
const StudentRoles = db.import("./models/studenthasmanyroles");
const StudentProject  = db.import("./models/studentproject");
const StudentSkill  = db.import("./models/studentskill");
const StudentTechnology  = db.import("./models/studenttechnology");
const StudentVacancy  = db.import("./models/studentproject");
const Company = db.import("./models/company");
const Course = db.import("./models/course");
const CoursePartner = db.import("./models/coursepartner");
const CourseSkill = db.import("./models/courseskill");
const CourseTechnology = db.import("./models/coursetechnology");
const Education = db.import("./models/education");
const AdditionalEducation = db.import("./models/additionaleducation");
const City = db.import("./models/city");
const Institution = db.import("./models/institution");
const Position = db.import("./models/position");
const Project = db.import("./models/project");
const ProjectRole = db.import("./models/projectrole");
const Recruiter = db.import("./models/recruiter");
const Role = db.import("./models/role");
const Skill = db.import("./models/skill");
const Technology = db.import("./models/technology");
const UserRole = db.import("./models/userrole");
const Vacancy = db.import("./models/vacancy");
const VacancySkill = db.import("./models/vacancyskill");
const VacancyTechnology = db.import("./models/vacancytechnology");
const WorkExperience = db.import("./models/workexperience");

module.exports = {
    User,Student,StudentCourse,StudentRoles,StudentProject,StudentSkill,StudentTechnology,StudentVacancy,Company,Course,CoursePartner,CourseSkill,CourseTechnology,
    Education,AdditionalEducation,City,Institution,Position,Project,ProjectRole,Recruiter,Role,Skill,Technology,UserRole,Vacancy,VacancySkill,VacancyTechnology,WorkExperience
};