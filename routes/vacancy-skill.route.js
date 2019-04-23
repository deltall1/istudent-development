module.exports = function(app) {

    const vacancySkills = require('../controllers/vacancy-skill.controller.js');

    // Create
    app.post('/vacancy-skills', vacancySkills.create);

    // Retrieve all
    app.get('/vacancy-skills', vacancySkills.findAll);

    // Retrieve a single  by Id
    app.get('/vacancy-skills/:studentID/:skillID', vacancySkills.findById);

    // Delete with Id
    app.delete('/vacancy-skills/:studentID/:skillID', vacancySkills.delete);
};