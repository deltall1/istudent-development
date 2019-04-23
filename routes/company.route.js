module.exports = function(app) {

    const companies = require('../controllers/company.controller.js');

    // Create
    app.post('/companies', companies.create);

    // Retrieve all
    app.get('/companies', companies.findAll);

    // Retrieve a single  by Id
    app.get('/companies/:id', companies.findById);

    // Update with Id
    app.put('/companies/:id', companies.update);

    // Delete with Id
    app.delete('/companies/:id', companies.delete);
};