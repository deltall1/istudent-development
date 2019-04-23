const models =  require("../database/allModels");
const VacancySkill = models.VacancySkill;

exports.create = (req, res) => {
    VacancySkill.create({
        vacancyID: req.body.vacancyID,
        skillID: req.body.skillID
    }).then(skill => {
        res.send(skill);
    });
};

exports.findAll = (req, res) => {
    VacancySkill.findAll().then(skills => {
        res.send(skills)
    });
};

exports.findById = (req, res) => {
    VacancySkill.findOne({
        where: {vacancyID: req.params.vacancyID}
    }).then(skill => {
        if(!skill){
            res.send({ error: 'not found'})
        } else {
            res.send(skill);
        }
    });
};

exports.delete = (req,res) =>{
    VacancySkill.destroy({
        where: {vacancyID: req.params.vacancyID, skillID : req.params.skillID}
    }).then(() => {
        res.status(200).send('deleted ');
    });
};