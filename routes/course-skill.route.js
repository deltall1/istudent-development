module.exports = function(app) {

    const courseSkills = require('../controllers/course-skill.controller');

    // Create
    app.post('/course-skills', courseSkills.create);

    // Retrieve all
    app.get('/course-skills', courseSkills.findAll);

    // Retrieve a single  by Id
    app.get('/course-skills/:courseID/:skillID', courseSkills.findById);

    // Delete with Id
    app.delete('/course-skills/:courseID/:skillID', courseSkills.delete);
};