require('dotenv-defaults').config();

const express = require("express");

const exampleRoutes = require("./routes/example-routes");
const configs = require('./config/app');
// Створюємо екземпляр БД
const db = require("./core/database");

const app = express();

// Створюємо маршрут /example
app.use("/example", exampleRoutes);

app.listen(configs.port, configs.host, () => {
    console.log(`app now listening for request on ${configs.host}:${configs.port}.`);
});
