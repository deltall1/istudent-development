const studentService = require("../services/student");
const companyService = require("../services/company");
const skillService = require("../services/skill");

exports.createStudentProfile = (req, res) => {
  if (req.body.student) {
    studentService.create(req.user.id, req.body.student).then(student => {
      console.log(student.dataValues);
      if (req.body.skills) {
        req.body.skills.forEach(element => {
          // Find or create Skill
          skillService.findByName(element.name).then(skill => {
            if (skill) {
              skill.addStudent(student);
            } else {
              student.createSkill(element);
            }
          });

          console.log("Skill successfully created");
        });
      }
      res.status(201).send("Student created");
    });
  }
};

exports.createCompanyProfile = (req, res) => {
  companyService
    .create(req.user.id, req.body.company)
    .then(company => {
      console.log(company.dataValues);
      company.createWork;
      res.status(201).send("Company successfully created");
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
};
