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

exports.findAll = async (req, res) => {
  vacancies = await vacancyService.getAllVacancies();
  res.send(vacancies);
};

exports.findVacancyByData = async (req, res) => {
  if (req.body.filter) {
    vacancies = await vacancyService.findByData(req.body.filter);

    res.send(vacancies);
  }
};
