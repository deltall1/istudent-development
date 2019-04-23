const models =  require("../database/allModels");
const CourseSkill = models.CourseSkill;

exports.create = (req, res) => {
    CourseSkill.create({
        courseID: req.body.courseID,
        skillID: req.body.skillID
    }).then(skill => {
        res.send(skill);
    });
};

exports.findAll = (req, res) => {
    CourseSkill.findAll().then(skills => {
        res.send(skills)
    });
};

exports.findById = (req, res) => {
    CourseSkill.findOne({
        where: {courseID: req.params.courseID}
    }).then(skill => {
        if(!skill){
            res.send({ error: 'not found'})
        } else {
            res.send(skill);
        }
    });
};

exports.delete = (req,res) =>{
    CourseSkill.destroy({
        where: {courseID: req.params.courseID, skillID : req.params.skillID}
    }).then(() => {
        res.status(200).send('deleted ');
    });
};