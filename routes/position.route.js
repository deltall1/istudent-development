module.exports = function(app) {

    const positions = require('../controllers/position.controller.js');

    // Create
    app.post('/positions', positions.create);

    // Retrieve all
    app.get('/positions', positions.findAll);

    // Retrieve a single  by Id
    app.get('/positions/:id', positions.findById);

    // Update with Id
    app.put('/positions/:id', positions.update);

    // Delete with Id
    app.delete('/positions/:id', positions.delete);
};