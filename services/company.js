const User = require("../database/models").User;
const Company = require("../database/models").Company;

exports.findOrCreate = (data) => {
    return Company.findOne({ where: { name: data.name } }).then(company =>{
        if(!company){
            return Company.create(data);
        }else{
            return company;
        }
    });
};

exports.findByName = companyName => {
  return Company.findOne({ where: { name: companyName } });
};

exports.findById = companyId => {
    return Company.findOne({ where: { id: companyId } });
};
