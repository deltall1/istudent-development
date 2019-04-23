const models =  require("../database/allModels");
const Vacancy = models.Vacancy;

exports.create = (req, res) =>{
    Vacancy.create({
        companyID: req.body.companyID,
        positionID: req.body.positionID,
        salaryFrom: req.body.salaryFrom,
        salaryTo: req.body.salaryTo,
        detail: req.body.detail
    }).then(vacancy =>{
        res.send(vacancy);
    })
};

exports.findAll = (req, res) =>{
    Vacancy.findAll().then(vacancies =>{
        res.send(vacancies);
    })
};

exports.findById = (req, res) => {
    Vacancy.findOne({
        where: {id: req.params.id}
    }).then(vacancy => {
        if(!vacancy){
            res.send({ error: 'not found'})
        } else {
            res.send(vacancy);
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Vacancy.update( {companyID: req.body.companyID,
            positionID: req.body.positionID,
            salaryFrom: req.body.salaryFrom,
            salaryTo: req.body.salaryTo,
            detail: req.body.detail},
        {where: {id: id} }
    ).then(()=>{
        res.status(200).send("updated with id = " + id);
    });
};

exports.delete = (req,res) =>{
    const id=req.params.id;
    Vacancy.destroy({
        where: {id:id}
    }).then(() => {
        res.status(200).send('deleted with id = ' + id);
    });
};