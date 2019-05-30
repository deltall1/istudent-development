const Vacancy = require("../database/models").Vacancy;

const companyService = require("./company");
const positionService = require("./position");

exports.create = (companyId, data) => {
  return companyService.findById(companyId).then(company => {
    return positionService.findOrCreate(data.positionID).then(position => {
      data.positionID = position.id;
      return company.createVacancy(data);
    });
  });
};

exports.getAllVacancies = () => {
  return Vacancy.findAll();
};

exports.findByData = data => {
  if (data.positionID) {
    return positionService.findByName(data.positionID).then(currPosition => {
      data.positionID = currPosition.id;

      return Vacancy.findAll({ where: data });
    });
  } else {
    return Vacancy.findAll({ where: data });
  }
};
