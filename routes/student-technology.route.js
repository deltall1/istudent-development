module.exports = function(app) {

    const studentTechnologies = require('../controllers/student-technology.controller.js');

    // Create
    app.post('/student-technologies', studentTechnologies.create);

    // Retrieve all
    app.get('/student-technologies', studentTechnologies.findAll);

    // Retrieve a single  by Id
    app.get('/student-technologies/:studentID/:skillID', studentTechnologies.findById);

    // Delete with Id
    app.delete('/student-technologies/:studentID/:skillID', studentTechnologies.delete);
};