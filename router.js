const express = require("express");
const router = express.Router();

// Routes
const userRoutes = require("./routes/user.route");

// Endpoints
router.use("/api/v1/user", userRoutes);

module.exports = router;
