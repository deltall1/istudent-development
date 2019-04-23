module.exports = function(app) {

    const courses = require('../controllers/course.controller.js');

    // Create
    app.post('/courses', courses.create);

    // Retrieve all
    app.get('/courses', courses.findAll);

    // Retrieve a single  by Id
    app.get('/courses/:id', courses.findById);

    // Update with Id
    app.put('/courses/:id', courses.update);

    // Delete with Id
    app.delete('/courses/:id', courses.delete);
};