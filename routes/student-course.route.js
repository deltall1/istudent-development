module.exports = function(app) {

    const studentCourses = require('../controllers/student-course.controller.js');

    // Create
    app.post('/student-courses', studentCourses.create);

    // Retrieve all
    app.get('/student-courses', studentCourses.findAll);

    // Retrieve a single  by Id
    app.get('/student-courses/:studentID/:courseID', studentCourses.findById);

    // Delete with Id
    app.delete('/student-courses/:studentID/:courseID', studentCourses.delete);
};