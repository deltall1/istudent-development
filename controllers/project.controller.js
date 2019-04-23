const models =  require("../database/allModels");
const Project = models.Project;

exports.create = (req, res) => {
    Project.findOne({
        where :{
            name: req.body.name
        }
    }).then(project =>{
        if(!project) {
            Project.create({
                name: req.body.name,
                link: req.body.link,
                description: req.body.description
            }).then(newProject => {
                res.send(newProject);
            });
        }else{
            res.send('This project already exists')
        }
    })
};

exports.findAll = (req, res) => {
    Project.findAll().then(projects => {
        res.send(projects)
    });
};

exports.findById = (req, res) => {
    Project.findOne({
        where: {id: req.params.id}
    }).then(project => {
        if(!project){
            res.send({ error: 'not found'})
        } else {
            res.send(project);
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Project.update( {name: req.body.name, link: req.body.link, description: req.body.description},
        {where: {id: id} }
    ).then(()=>{
        res.status(200).send("updated with id = " + id);
    });
};

exports.delete = (req,res) =>{
    const id = req.params.id;
    Project.destroy({
        where: {id:id}
    }).then(() => {
        res.status(200).send('deleted with id = ' + id);
    });
};