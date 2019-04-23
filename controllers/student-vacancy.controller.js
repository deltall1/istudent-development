const models =  require("../database/allModels");
const StudentVacancy = models.StudentVacancy;

exports.create = (req, res) => {
    StudentVacancy.create({
        studentID: req.body.studentID,
        vacancyID: req.body.vacancyID
    }).then(vacancy => {
        res.send(vacancy);
    });
};

exports.findAll = (req, res) => {
    StudentVacancy.findAll().then(vacancies => {
        res.send(vacancies)
    });
};

exports.findById = (req, res) => {
    StudentVacancy.findOne({
        where: {studentID: req.params.studentID}
    }).then(vacancy => {
        if(!vacancy){
            res.send({ error: 'not found'})
        } else {
            res.send(vacancy);
        }
    });
};

exports.delete = (req,res) =>{
    StudentVacancy.destroy({
        where: {studentID: req.params.studentID, vacancyID : req.params.vacancyID}
    }).then(() => {
        res.status(200).send('deleted ');
    });
};