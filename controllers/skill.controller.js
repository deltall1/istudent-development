const models =  require("../database/allModels");
const Skill = models.Skill;

exports.create = (req, res) => {
    Skill.findOne({
        where :{
            name: req.body.name
        }
    }).then(skill =>{
        if(!skill) {
            Skill.create({
                name: req.body.name
            }).then(newSkill => {
                res.send(newSkill);
            });
        }else{
            res.send('This skill already exists')
        }
    })
};

exports.findAll = (req, res) => {
    Skill.findAll().then(skills => {
        res.send(skills)
    });
};

exports.findByName = (req, res) => {
    Skill.findOne({
        where: {name: req.params.name}
    }).then(skill => {
        if(!skill){
            res.send({ error: 'not found'})
        } else {
            res.send(skill);
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Skill.update( {name: req.body.name},
        {where: {id: id} }
    ).then(()=>{
        res.status(200).send("updated with id = " + id);
    });
};

exports.delete = (req,res) =>{
    const id = req.params.id;
    Skill.destroy({
        where: {id:id}
    }).then(() => {
        res.status(200).send('deleted with id = ' + id);
    });
};