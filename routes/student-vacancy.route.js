module.exports = function(app) {

    const studentVacancies = require('../controllers/student-vacancy.controller.js');

    // Create
    app.post('/student-vacancies', studentVacancies.create);

    // Retrieve all
    app.get('/student-vacancies', studentVacancies.findAll);

    // Retrieve a single  by Id
    app.get('/student-vacancies/:studentID/:skillID', studentVacancies.findById);

    // Delete with Id
    app.delete('/student-vacancies/:studentID/:skillID', studentVacancies.delete);
};