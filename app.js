const express = require("express");
const regRoutes = require("./routes/register-routes");
const authRoutes = require("./routes/auth-routes");
const bodyParser = require("body-parser");
// Створюємо екземпляр БД
// const db = require("./config/database");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Створюємо маршрут /example
app.use("/reg", regRoutes);
app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("app now listening for request on port 5000");
});
