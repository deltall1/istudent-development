module.exports = function(app) {

    const roles = require('../controllers/role.controller.js');

    // Create
    app.post('/roles', roles.create);

    // Retrieve all
    app.get('/roles', roles.findAll);

    // Retrieve a single  by Id
    app.get('/roles/:name', roles.findByName);

    // Update with Id
    app.put('/roles/:id', roles.update);

    // Delete with Id
    app.delete('/roles/:id', roles.delete);
};