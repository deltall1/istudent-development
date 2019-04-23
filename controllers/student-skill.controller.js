const models =  require("../database/allModels");
const StudentSkill = models.StudentSkill;

exports.create = (req, res) => {
    StudentSkill.create({
        studentID: req.body.studentID,
        skillID: req.body.skillID
    }).then(skill => {
        res.send(skill);
    });
};

exports.findAll = (req, res) => {
    StudentSkill.findAll().then(skills => {
        res.send(skills)
    });
};

exports.findById = (req, res) => {
    StudentSkill.findOne({
        where: {studentID: req.params.studentID}
    }).then(skill => {
        if(!skill){
            res.send({ error: 'not found'})
        } else {
            res.send(skill);
        }
    });
};

exports.delete = (req,res) =>{
    StudentSkill.destroy({
        where: {studentID: req.params.studentID, skillID : req.params.skillID}
    }).then(() => {
        res.status(200).send('deleted ');
    });
};