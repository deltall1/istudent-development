const studentService = require("../services/student");
const companyService = require("../services/company");

exports.createStudentProfile = (req, res) => {
  /*
    if(req.body.student){
        studentService.create(req.user.id, req.body.student)
            .then(student => {
                console.log(student.dataValues)
                res.status(201).send("Student created")
            })
    }
    */
  res.send("It is profile page!");
};

exports.createCompanyProfile = (req, res) => {
  companyService
    .create(req.user.id, req.body.company)
    .then(company => {
      console.log(company.dataValues);
      company.createWork
      res.status(201).send("Company successfully created");
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
};
