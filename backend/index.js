"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const { sequelize } = require("./src/database/models");
const rootRouter = require("./src/routes");
const swaggerSpec = require("./src/docs");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json(
    "This is the api of the Easy Booking Cinema project, api docs: https://easy-cinema-booking-api.herokuapp.com/api-docs"
  );
});
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", rootRouter);
app.use((err, req, res, next) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    status: "error",
    message,
  });
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
