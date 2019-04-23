module.exports = function(app) {

    const projects = require('../controllers/project.controller.js');

    // Create
    app.post('/projects', projects.create);

    // Retrieve all
    app.get('/projects', projects.findAll);

    // Retrieve a single  by Id
    app.get('/projects/:id', projects.findById);

    // Update with Id
    app.put('/projects/:id', projects.update);

    // Delete with Id
    app.delete('/projects/:id', projects.delete);
};