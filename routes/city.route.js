module.exports = function(app) {

    const cities = require('../controllers/city.controller.js');

    // Create
    app.post('/cities', cities.create);

    // Retrieve all
    app.get('/cities', cities.findAll);

    // Retrieve a single  by Id
    app.get('/cities/:name', cities.findByName);

    // Update with Id
    app.put('/cities/:id', cities.update);

    // Delete with Id
    app.delete('/cities/:id', cities.delete);
};