require('dotenv-defaults').config();

const configs = require("./config/app");
const express = require("express");
const regRoutes = require("./routes/register-routes");
const authRoutes = require("./routes/auth-routes");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Створюємо маршрут /example
app.use("/reg", regRoutes);
app.use("/auth", authRoutes);

app.listen(configs.port, configs.host, () => {
    console.log(`app now listening for request on ${configs.host}:${configs.port}.`);
});
