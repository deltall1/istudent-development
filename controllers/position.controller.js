const models =  require("../database/allModels");
const Position = models.Position;

exports.create = (req, res) => {
    Position.findOne({
        where :{
            name: req.body.name
        }
    }).then(position =>{
        if(!position) {
            Position.create({
                name: req.body.name
            }).then(newPosition => {
                res.send(newPosition);
            });
        }else{
            res.send('This position already exists')
        }
    })
};

exports.findAll = (req, res) => {
    Position.findAll().then(positions => {
        res.send(positions)
    });
};

exports.findById = (req, res) => {
    Position.findOne({
        where: {id: req.params.id}
    }).then(position => {
        if(!position){
            res.send({ error: 'not found'})
        } else {
            res.send(position);
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Position.update( {name: req.body.name},
        {where: {id: id} }
    ).then(()=>{
        res.status(200).send("updated with id = " + id);
    });
};

exports.delete = (req,res) =>{
    const id=req.params.id;
    Position.destroy({
        where: {id:id}
    }).then(() => {
        res.status(200).send('deleted with id = ' + id);
    });
};