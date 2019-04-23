const models =  require("../database/allModels");
const StudentTechnology = models.StudentTechnology;

exports.create = (req, res) => {
    StudentTechnology.create({
        studentID: req.body.studentID,
        technologyID: req.body.technologyID
    }).then(technology => {
        res.send(technology);
    });
};

exports.findAll = (req, res) => {
    StudentTechnology.findAll().then(technologies => {
        res.send(technologies)
    });
};

exports.findById = (req, res) => {
    StudentTechnology.findOne({
        where: {studentID: req.params.studentID}
    }).then(technology => {
        if(!technology){
            res.send({ error: 'not found'})
        } else {
            res.send(technology);
        }
    });
};

exports.delete = (req,res) =>{
    StudentTechnology.destroy({
        where: {studentID: req.params.studentID, technologyID : req.params.technologyID}
    }).then(() => {
        res.status(200).send('deleted ');
    });
};