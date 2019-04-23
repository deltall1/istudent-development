const models =  require("../database/allModels");
const CourseTechnology = models.CourseTechnology;

exports.create = (req, res) => {
    CourseTechnology.create({
        courseID: req.body.courseID,
        technologyID: req.body.technologyID
    }).then(technology => {
        res.send(technology);
    });
};

exports.findAll = (req, res) => {
    CourseTechnology.findAll().then(technologies => {
        res.send(technologies)
    });
};

exports.findById = (req, res) => {
    CourseTechnology.findOne({
        where: {courseID: req.params.courseID}
    }).then(technology => {
        if(!technology){
            res.send({ error: 'not found'})
        } else {
            res.send(technology);
        }
    });
};

exports.delete = (req,res) =>{
    CourseTechnology.destroy({
        where: {courseID: req.params.courseID, technologyID : req.params.technologyID}
    }).then(() => {
        res.status(200).send('deleted ');
    });
};