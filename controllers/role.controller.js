const models =  require("../database/allModels");
const Role = models.Role;

exports.create = (req, res) => {
    Role.findOne({
        where :{
            name: req.body.name
        }
    }).then(role =>{
        if(!role) {
            Role.create({
                name: req.body.name
            }).then(newRole => {
                res.send(newRole);
            });
        }else{
            res.send('This role already exists')
        }
    })
};

exports.findAll = (req, res) => {
    Role.findAll().then(roles => {
        res.send(roles)
    });
};

exports.findByName = (req, res) => {
    Role.findOne({
        where: {name: req.params.name}
    }).then(role => {
        if(!role){
            res.send({ error: 'not found'})
        } else {
            res.send(role);
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Role.update( {name: req.body.name},
        {where: {id: id} }
    ).then(()=>{
        res.status(200).send("updated with id = " + id);
    });
};

exports.delete = (req,res) =>{
    const id = req.params.id;
    Role.destroy({
        where: {id:id}
    }).then(() => {
        res.status(200).send('deleted with id = ' + id);
    });
};