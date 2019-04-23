const models =  require("../database/allModels");
const Company = models.Company;

exports.create = (req, res) => {
    Company.findOne({
        where :{
            name: req.body.name
        }
    }).then(company =>{
        if(!company) {
            Company.create({
                name: req.body.name,
                city: req.body.city,
                link: req.body.link
            }).then(newCompany => {
                res.send(newCompany);
            });
        }else{
            res.send('This company already exists')
        }
    })
};

exports.findAll = (req, res) => {
    Company.findAll().then(companies => {
        res.send(companies)
    });
};

exports.findById = (req, res) => {
    Company.findOne({
        where: {id: req.params.id}
    }).then(company => {
        if(!company){
            res.send({ error: 'not found'})
        } else {
            res.send(company);
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Company.update( {name: req.body.name, link: req.body.link, city: req.body.city},
        {where: {id: id} }
    ).then(()=>{
        res.status(200).send("updated with id = " + id);
    });
};

exports.delete = (req,res) =>{
    const id = req.params.id;
    Company.destroy({
        where: {id:id}
    }).then(() => {
        res.status(200).send('deleted with id = ' + id);
    });
};