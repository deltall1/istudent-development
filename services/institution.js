const Institution = require("../database/models").Institution;

exports.findByName = institutionName => {
    return Institution.findOne({ where: { name: institutionName } });
};

exports.findOrCreate = institutionName =>{
    return Institution.findOne({ where: { name: institutionName } }).then(institution =>{
        if(!institution){
            return Institution.create({name: institutionName}).id;
        }else{
            return institution.id;
        }
    })
};

exports.getId = institutionName =>{
    const institution = Institution.findOne({ where: { name: institutionName } });
    return institution.id
};
exports.create = institutionName => {
    return Institution.create({ name: institutionName });
};