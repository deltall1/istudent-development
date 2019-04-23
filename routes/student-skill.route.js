module.exports = function(app) {

    const studentSkills = require('../controllers/student-skill.controller.js');

    // Create
    app.post('/student-skills', studentSkills.create);

    // Retrieve all
    app.get('/student-skills', studentSkills.findAll);

    // Retrieve a single  by Id
    app.get('/student-skills/:studentID/:skillID', studentSkills.findById);

    // Delete with Id
    app.delete('/student-skills/:studentID/:skillID', studentSkills.delete);
};