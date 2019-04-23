const models =  require("../database/allModels");
const VacancyTechnology = models.VacancyTechnology;

exports.create = (req, res) => {
    VacancyTechnology.create({
        vacancyID: req.body.vacancyID,
        technologyID: req.body.technologyID
    }).then(technology => {
        res.send(technology);
    });
};

exports.findAll = (req, res) => {
    VacancyTechnology.findAll().then(technologies => {
        res.send(technologies)
    });
};

exports.findById = (req, res) => {
    VacancyTechnology.findOne({
        where: {vacancyID: req.params.vacancyID}
    }).then(technology => {
        if(!technology){
            res.send({ error: 'not found'})
        } else {
            res.send(technology);
        }
    });
};

exports.delete = (req,res) =>{
    VacancyTechnology.destroy({
        where: {vacancyID: req.params.vacancyID, technologyID : req.params.technologyID}
    }).then(() => {
        res.status(200).send('deleted ');
    });
};