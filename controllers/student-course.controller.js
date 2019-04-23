const models =  require("../database/allModels");
const StudentCourse = models.StudentCourse;

exports.create = (req, res) => {
    StudentCourse.create({
        studentID: req.body.studentID,
        courseID: req.body.courseID
    }).then(course => {
        res.send(course);
    });
};

exports.findAll = (req, res) => {
    StudentCourse.findAll().then(courses => {
        res.send(courses)
    });
};

exports.findById = (req, res) => {
    StudentCourse.findOne({
        where: {studentID: req.params.studentID}
    }).then(course => {
        if(!course){
            res.send({ error: 'not found'})
        } else {
            res.send(course);
        }
    });
};

exports.delete = (req,res) =>{
    StudentCourse.destroy({
        where: {studentID: req.params.studentID, courseID : req.params.courseID}
    }).then(() => {
        res.status(200).send('deleted ');
    });
};