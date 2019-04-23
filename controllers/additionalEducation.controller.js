const models =  require("../database/allModels");
const Education = models.AdditionalEducation;

exports.create = (req, res) =>{
    Education.create({
        studentID: req.body.studentID,
        courseName: req.body.courseName,
        company: req.body.company,
        duration: req.body.duration,
        year: req.body.year,
        isOnlineCourse: req.body.isOnlineCourse,
        certificationLink: req.body.certificationLink
    }).then(education =>{
        res.send(education);
    })
};

exports.findAll = (req, res) =>{
    Education.findAll().then(educations =>{
        res.send(educations);
    })
};

exports.findById = (req, res) => {
    Education.findOne({
        where: {id: req.params.id}
    }).then(education => {
        if(!education){
            res.send({ error: 'not found'})
        } else {
            res.send(education);
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Education.update( {name: req.body.name},
        {where: {id: id} }
    ).then(()=>{
        res.status(200).send("updated with id = " + id);
    });
};

exports.delete = (req,res) =>{
    const id=req.params.id;
    Education.destroy({
        where: {id:id}
    }).then(() => {
        res.status(200).send('deleted with id = ' + id);
    });
};