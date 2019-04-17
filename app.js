require('dotenv-defaults').config();

const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');

const configs = require("./config/app");
const regRoutes = require("./routes/register-routes");
const authRoutes = require("./routes/auth-routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize({}));

// Passport configuration
require('./core/passport');


// Створюємо маршрут /example
app.use("/reg", regRoutes);
app.use("/auth", authRoutes);



// JUST Example!!!
app.get('/api/me',
    passport.authenticate('bearer', { session: false }),
    function(req, res) {
        res.json(req.user);
    });



app.listen(configs.port, configs.host, () => {
    console.log(`app now listening for request on ${configs.host}:${configs.port}.`);
});
