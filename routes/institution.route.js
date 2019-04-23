module.exports = function(app) {

    const institutions = require('../controllers/institution.controller.js');

    // Create
    app.post('/institutions', institutions.create);

    // Retrieve all
    app.get('/institutions', institutions.findAll);

    // Retrieve a single  by Id
    app.get('/institutions/:id', institutions.findById);

    // Update with Id
    app.put('/institutions/:id', institutions.update);

    // Delete with Id
    app.delete('/institutions/:id', institutions.delete);
};