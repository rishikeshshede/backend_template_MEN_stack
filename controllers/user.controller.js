const jwt = require("jsonwebtoken");

const userService = require("../services/user.service");
const { JWT_SECRET, JWT_EXPIRY } = require("../configs/server.config");

module.exports = {
  getUserProfile: async (req, res, next) => {
    try {
      const myUserId = req.user.userId;
      const { findUserId } = req.params;

      const user = await userService.getUserProfile(myUserId, findUserId);

      if (user) {
        res.status(200).json({
          data: user,
          message: "Found user",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "User not found",
          success: false,
        });
      }
    } catch (error) {
      next(error);
    }
  },

  createUser: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;

      const user = await userService.createUser({ name, email, password });

      if (user) {
        const token = jwt.sign(
          {
            userId: user._id,
            email: email,
          },
          JWT_SECRET,
          { expiresIn: JWT_EXPIRY }
        );

        res.status(201).json({
          data: user,
          message: "User Created",
          success: true,
          token,
        });
      }
    } catch (error) {
      next(error);
    }
  },
};
