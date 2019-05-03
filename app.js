require('dotenv-defaults').config();

const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');

const configs = require("./config/app");
const Routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize({}));

// Passport configuration
require('./core/passport');


// Створюємо маршрути
app.use("/reg", Routes.registration);
app.use("/auth", Routes.authorization);
app.use("/profile", passport.authenticate('bearer', { session: false }), Routes.profile)


app.listen(configs.port, configs.host, () => {
    console.log(`app now listening for request on ${configs.host}:${configs.port}.`);
});