module.exports = function(app) {

    const vacancyTechnologies = require('../controllers/vacancy-technology.controller.js');

    // Create
    app.post('/vacancy-technologies', vacancyTechnologies.create);

    // Retrieve all
    app.get('/vacancy-technologies', vacancyTechnologies.findAll);

    // Retrieve a single  by Id
    app.get('/vacancy-technologies/:studentID/:skillID', vacancyTechnologies.findById);

    // Delete with Id
    app.delete('/vacancy-technologies/:studentID/:skillID', vacancyTechnologies.delete);
};