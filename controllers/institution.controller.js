const models =  require("../database/allModels");
const Institution = models.Institution;

exports.create = (req, res) => {
    Institution.findOne({
        where :{
            name: req.body.name
        }
    }).then(institution =>{
        if(!institution) {
            Institution.create({
                name: req.body.name
            }).then(newInstitution => {
                res.send(newInstitution);
            });
        }else{
            res.send('This institution already exists')
        }
    })
};

exports.findAll = (req, res) => {
    Institution.findAll().then(institutions => {
        res.send(institutions)
    });
};

exports.findById = (req, res) => {
    Institution.findOne({
        where: {id: req.params.id}
    }).then(institution => {
        if(!institution){
            res.send({ error: 'not found'})
        } else {
            res.send(institution);
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Institution.update( {name: req.body.name},
        {where: {id: id} }
    ).then(()=>{
        res.status(200).send("updated with id = " + id);
    });
};

exports.delete = (req,res) =>{
    const id=req.params.id;
    Institution.destroy({
        where: {id:id}
    }).then(() => {
        res.status(200).send('deleted with id = ' + id);
    });
};