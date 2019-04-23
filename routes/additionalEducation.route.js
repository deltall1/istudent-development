module.exports = function(app) {

    const educations = require('../controllers/additionalEducation.controller.js');

    // Create
    app.post('/additional', educations.create);

    // Retrieve all
    app.get('/additional', educations.findAll);

    // Retrieve a single  by Id
    app.get('/additional/:id', educations.findById);

    // Update with Id
    app.put('/additional/:id', educations.update);

    // Delete with Id
    app.delete('/additional/:id', educations.delete);
};