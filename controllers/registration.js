const db = require('../config/database');
const User = db.import('../database/models/user');

const createUser = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(!user) {
            User.create({
                email: req.body.email,
                password: req.body.password
            }).then(newUser => {
                console.log(newUser.dataValues);
                res.send('User created successfully');
            })
        } else {
            res.send('This user already exists')
        }
    })
};

module.exports = {
    createUser
};