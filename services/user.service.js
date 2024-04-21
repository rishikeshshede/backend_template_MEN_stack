const User = require("../models/user.model");
const ApiError = require("../utils/apiError.util");

module.exports = {
  createUser: async ({ name, email, password }) => {
    try {
      // Check if email is already registered
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        throw new ApiError(429, "Email already exists");
      }

      // Create a new user
      const newUser = new User({
        name,
        email,
        password,
      });

      // Save the user to the database
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new ApiError(error.status, error.message, [error]);
    }
  },

  getUserProfile: async (myUserId, findUserId) => {
    try {
      const existingUser = await User.findOne({ _id: findUserId });

      if (!existingUser) {
        throw new ApiError(404, "This user doesn't exist.");
      }

      // Can also check if myUserId is authorized to get this user's profile

      return existingUser;
    } catch (error) {}
  },
};
