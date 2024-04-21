// Load environment variables from .env file
require("dotenv").config();
const connectToDatabase = require("./database.config");

// ############### Connect Database ###############

connectToDatabase();

const PORT = process.env.PORT || 8000;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = "1y";

module.exports = {
  PORT,
  JWT_SECRET,
  JWT_EXPIRY,
};
