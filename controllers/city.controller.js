const models =  require("../database/allModels");
const City = models.City;

exports.create = (req, res) => {
    City.findOne({
        where :{
            name: req.body.name
        }
    }).then(city =>{
        if(!city) {
            City.create({
                name: req.body.name
            }).then(newCity => {
                res.send(newCity);
            });
        }else{
            res.send('This city already exists')
        }
    })
};

exports.findAll = (req, res) => {
    City.findAll().then(cities => {
        res.send(cities)
    });
};

exports.findByName = (req, res) => {
    City.findOne({
        where: {name: req.params.name}
    }).then(city => {
        if(!city){
            res.send({ error: 'not found'})
        } else {
            res.send(city);
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    City.update( {name: req.body.name},
        {where: {id: id} }
    ).then(()=>{
        res.status(200).send("updated with id = " + id);
    });
};

exports.delete = (req,res) =>{
    const id=req.params.id;
    City.destroy({
        where: {id:id}
    }).then(() => {
        res.status(200).send('deleted with id = ' + id);
    });
};