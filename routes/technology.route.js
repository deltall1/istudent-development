module.exports = function(app) {

    const technologies = require('../controllers/technology.controller.js');

    // Create
    app.post('/technologies', technologies.create);

    // Retrieve all
    app.get('/technologies', technologies.findAll);

    // Retrieve a single  by Id
    app.get('/technologies/:id', technologies.findById);

    // Update with Id
    app.put('/technologies/:id', technologies.update);

    // Delete with Id
    app.delete('/technologies/:id', technologies.delete);
};