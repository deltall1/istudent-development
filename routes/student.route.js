module.exports = function(app) {

    const students = require('../controllers/student.controller.js');

    // Create a new Student
    app.post('/students', students.create);

    // Retrieve all Student
    app.get('/students', students.findAll);

    // Retrieve a single Student by Id
    app.get('/students/:id', students.findById);

    // Update a Student with Id
    app.put('/students/:id', students.update);

    // Delete a Student with Id
    app.delete('/students/:id', students.delete);
};