const models =  require("../database/allModels");
const StudentProject = models.StudentProject;

exports.create = (req, res) => {
    StudentProject.create({
        studentID: req.body.studentID,
        projectID: req.body.projectID
    }).then(project => {
        res.send(project);
    });
};

exports.findAll = (req, res) => {
    StudentProject.findAll().then(projects => {
        res.send(projects)
    });
};

exports.findById = (req, res) => {
    StudentProject.findOne({
        where: {studentID: req.params.studentID}
    }).then(project => {
        if(!project){
            res.send({ error: 'not found'})
        } else {
            res.send(project);
        }
    });
};

exports.delete = (req,res) =>{
    StudentProject.destroy({
        where: {studentID: req.params.studentID, projectID : req.params.projectID}
    }).then(() => {
        res.status(200).send('deleted ');
    });
};