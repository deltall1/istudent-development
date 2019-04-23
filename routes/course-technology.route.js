module.exports = function(app) {

    const courseTechnologies = require('../controllers/student-technology.controller.js');

    // Create
    app.post('/course-technologies', courseTechnologies.create);

    // Retrieve all
    app.get('/course-technologies', courseTechnologies.findAll);

    // Retrieve a single  by Id
    app.get('/course-technologies/:courseID/:skillID', courseTechnologies.findById);

    // Delete with Id
    app.delete('/course-technologies/:courseID/:skillID', courseTechnologies.delete);
};