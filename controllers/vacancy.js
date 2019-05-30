const companyService = require("../services/company");
const vacancyService = require("../services/vacancy");

exports.createVacancy = (req, res) => {
  if (req.body.vacancy) {
    companyService.findByUser(req.user.id).then(recruiter => {
      vacancyService.create(recruiter.companyID, req.body.vacancy);
    });

    res.send("Vacancy created");
  }
};

exports.findAll = (req, res) => {
  vacancyService.getAllVacancies().then(vacancies => {
    res.send(vacancies);
  });
};

exports.findVacancyByData = (req, res) => {
  if (req.body.filter) {
    vacancyService.findByData(req.body.filter).then(vacancies => {
      res.send(vacancies);
    });
  }
};
