module.exports = function(app) {

    const vacancies = require('../controllers/vacancy.controller.js');

    // Create
    app.post('/vacancies', vacancies.create);

    // Retrieve all
    app.get('/vacancies', vacancies.findAll);

    // Retrieve a single  by Id
    app.get('/vacancies/:id', vacancies.findById);

    // Update with Id
    app.put('/vacancies/:id', vacancies.update);

    // Delete with Id
    app.delete('/vacancies/:id', vacancies.delete);
};