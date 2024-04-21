const express = require("express");
const app = express();

const router = require("./router");
const errorHandler = require("./middlewares/errorHandler.middleware");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
app.use(router);

// Making public folder accessible
app.use("/public", express.static("public"));

// Error Handling Middleware
app.use(errorHandler);

// 404 Error Handling
app.use((req, res, next) => {
  res.status(404).json({ message: "Route Not Found" });
});

module.exports = { app };
