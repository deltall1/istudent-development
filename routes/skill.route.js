module.exports = function(app) {

    const skills = require('../controllers/skill.controller.js');

    // Create
    app.post('/skills', skills.create);

    // Retrieve all
    app.get('/skills', skills.findAll);

    // Retrieve a single  by Id
    app.get('/skills/:name', skills.findByName);

    // Update with Id
    app.put('/skills/:id', skills.update);

    // Delete with Id
    app.delete('/skills/:id', skills.delete);
};