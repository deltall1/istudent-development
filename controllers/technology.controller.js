const models =  require("../database/allModels");
const Technology = models.Technology;

exports.create = (req, res) => {
    Technology.findOne({
        where :{
            name: req.body.name
        }
    }).then(technology =>{
        if(!technology) {
            Technology.create({
                name: req.body.name
            }).then(newTechnology => {
                res.send(newTechnology);
            });
        }else{
            res.send('This technology already exists')
        }
    })
};

exports.findAll = (req, res) => {
    Technology.findAll().then(technologies => {
        res.send(technologies)
    });
};

exports.findById = (req, res) => {
    Technology.findOne({
        where: {id: req.params.id}
    }).then(technology => {
        if(!technology){
            res.send({ error: 'not found'})
        } else {
            res.send(technology);
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Technology.update( {name: req.body.name},
        {where: {id: id} }
    ).then(()=>{
        res.status(200).send("updated with id = " + id);
    });
};

exports.delete = (req,res) =>{
    const id = req.params.id;
    Technology.destroy({
        where: {id:id}
    }).then(() => {
        res.status(200).send('deleted with id = ' + id);
    });
};