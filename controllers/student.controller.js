const models =  require("../database/allModels");
const Student = models.Student;

exports.create = (req, res) => {
    Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        city: req.body.city
    }).then(student => {
        res.send(student);
        });
};

exports.findAll = (req, res) =>{
    Student.findAll().then(students => {
        res.send(students);
    });
};

exports.findById = (req, res) => {
    Student.findOne({
        where: {id: req.params.id}
    }).then(student => {
        if(!student){
            res.send({ error: 'not found'})
        } else {
            res.send(student);
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Student.update( {firstName: req.body.firstName, lastName: req.body.lastName, city: req.body.city},
        {where: {id: id} }
        ).then(()=>{
            res.status(200).send("updated successfully a customer with id = " + id);
    });
};

exports.delete = (req,res) =>{
    const id=req.params.id;
    Student.destroy({
        where: {id:id}
    }).then(() => {
        res.status(200).send('deleted successfully a customer with id = ' + id);
    });
};