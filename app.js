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
app.use("/reg", Routes.registrationRouts);
app.use("/auth", Routes.authRoutes);
app.use("/profile", passport.authenticate('bearer', { session: false }), Routes.profileRoutes);
require('./routes/student.route.js')(app);
require('./routes/city.route.js')(app);
require('./routes/education.route.js')(app);
require('./routes/additionalEducation.route.js')(app);
require('./routes/institution.route.js')(app);
require('./routes/skill.route.js')(app);
require('./routes/student-skill.route.js')(app);
require('./routes/technology.route.js')(app);
require('./routes/student-technology.route.js')(app);
require('./routes/student-vacancy.route.js')(app);
require('./routes/company.route.js')(app);
require('./routes/position.route.js')(app);
require('./routes/vacancy.route.js')(app);
require('./routes/vacancy-skill.route.js')(app);
require('./routes/vacancy-technology.route.js')(app);
require('./routes/role.route.js')(app);
require('./routes/course.route')(app);
require('./routes/course-technology.route.js')(app);
require('./routes/course-skill.route.js')(app);
require('./routes/student-course.route')(app);


app.listen(configs.port, configs.host, () => {
    console.log(`app now listening for request on ${configs.host}:${configs.port}.`);
});