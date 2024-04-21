require("dotenv").config();
const mongoose = require("mongoose");

// ############### MongoDB configs ###############

const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_CLUSTER = process.env.MONGODB_CLUSTER;
const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;

const MONGODB_URI = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.${MONGODB_CLUSTER}.mongodb.net/${MONGODB_DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectToDatabase;
