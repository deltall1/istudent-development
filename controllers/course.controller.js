const models =  require("../database/allModels");
const Course = models.Course;

exports.create = (req, res) => {
    Course.findOne({
        where :{
            name: req.body.name
        }
    }).then(course =>{
        if(!course) {
            Course.create({
                companyID: req.body.companyID,
                name: req.body.name,
                link: req.body.link
            }).then(newCourse => {
                res.send(newCourse);
            });
        }else{
            res.send('This course already exists')
        }
    })
};

exports.findAll = (req, res) => {
    Course.findAll().then(courses => {
        res.send(courses)
    });
};

exports.findById = (req, res) => {
    Course.findOne({
        where: {id: req.params.id}
    }).then(course => {
        if(!course){
            res.send({ error: 'not found'})
        } else {
            res.send(course);
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Course.update( {companyID: req.body.companyID,name: req.body.name, link: req.body.link},
        {where: {id: id} }
    ).then(()=>{
        res.status(200).send("updated with id = " + id);
    });
};

exports.delete = (req,res) =>{
    const id = req.params.id;
    Course.destroy({
        where: {id:id}
    }).then(() => {
        res.status(200).send('deleted with id = ' + id);
    });
};