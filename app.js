const express = require("express");
const exampleRoutes = require("./routes/example-routes");
// Створюємо екземпляр БД
const db = require("./config/database");

const app = express();

// Створюємо маршрут /example
app.use("/example", exampleRoutes);

app.listen(5000, () => {
  console.log("app now listening for request on port 5000");
});
