module.exports = function(app) {

    const educations = require('../controllers/education.controller.js');

    // Create
    app.post('/educations', educations.create);

    // Retrieve all
    app.get('/educations', educations.findAll);

    // Retrieve a single  by Id
    app.get('/educations/:id', educations.findById);

    // Update with Id
    app.put('/educations/:id', educations.update);

    // Delete with Id
    app.delete('/educations/:id', educations.delete);
};